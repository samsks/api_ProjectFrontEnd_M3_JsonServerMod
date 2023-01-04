const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
  users: 600,
  tasks: 640,
  alarms: 640,
  finance: 640,
  list: 640,
});

//Configurações extras criadas para alterar o comportamento do JsonServer
//_______________________________________________________________________

router.render = (req, res) => {
  const user = req.user; //buscar dado (pode ser outro) para usar na condição de user admin

  // condição baseada na rota
  if (req.path.startsWith("/users")) {
    const userData = res.locals.data; //é a própria resposta da req

    const { toys } = router.db.__wrapped__; // acessando uma tabela chamada toys
    const { purchases_historic } = router.db.__wrapped__;

    //realizando 2 filtros cruzando dados com o id do usuário
    const toysMod = toys.filter((toy) => {
      return toy.userId == userData.id;
    });
    const historic = purchases_historic.filter((historic) => {
      return historic.userId == userData.id;
    });

    //resposta personalizada pela necessidade
    res.jsonp({
      ...userData.locals.data,
      toy: toysMod,
      purchases_historic: historic,
    });
  } else if (!user || !user.isAdmin) {
    // Se o usuário não estiver autenticado ou não for um administrador,
    // envie um erro 403 (proibido)
    res.sendStatus(403);
  } else {
    res.jsonp(res.locals.data);
  }
};
//________________________________________________________________________________________________

app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Luis Fernando M.R Silva é 123456 */
