# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

Após clonar esse rep coloque esse comando no terminar yarn add -D json-server json-server-auth para instalar as dependencias .

Após instalar as dependencias para subir o serve adicione esse comando "node server.js" esse é a rota local http://localhost:3001/


url heroku https://json-server-iplanner-v1.herokuapp.com/

## Endpoints

### Cadastro

POST URL_BASE /signup <br/>
JSON {

    "name": "luis Fenando",

    "email":"fernandoQA@kenzie.com",

    "birthDate": "01/03/1998",

    "password":"123456",

    "profileImg" :
        "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg"

}

resposta <br/>
JSON {

    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRvUUFAa2VuemllLmNvbSIsImlhdCI6MTY2NzQyNTQ0NiwiZXhwIjoxNjY3NDI5MDQ2LCJzdWIiOiI2In0.roo3KmzD4jMr3CeQBoDrdaY2hJ0gf2OxhbFLj4A1bJE",

    "user": {
    	"email": "fernandoQA@kenzie.com",

        "name": "luis Fenando",

        "birthDate": "01/03/1998",

        "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
    	"id": 6
    }

}

---

### Login

POST URL_BASE /login <br/>
JSON{

    "email": "fernandoQA@kenzie.com",
    "password": "123456"

}

Resposta <br/>
JSON{

    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRvUUFAa2VuemllLmNvbSIsImlhdCI6MTY2NzQ3OTIyMSwiZXhwIjoxNjY3NDgyODIxLCJzdWIiOiI2In0.ZUWLMBf-y9ZwZukMVbGf-b8I3CMVEbJ07Hz8sGRURh8",

    "user": {
        "email": "fernandoQA@kenzie.com",
        "name": "luis Fenando",
        "birthDate": "01/03/1998",
            "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
        "id": 6

    }

}

---

## authentication <br/>

GET URL_BASE users/ Id do usuario <br/>
Obrigatorio estar logado <br/>

resporta {<br/>

    "email": "fernandoQA@kenzie.com",

    "password": "$2a$10$29cy.dXRWTSMA/JXXTv1z..PESb9IDkpTXs6Puo78CIQaGyVMRxLG",

    "name": "luis Fenando",

    "birthDate": "01/03/1998",

    "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",

    "id": 6

}

---

### Rodas autenticadas<br/>

### Alarms<br/>

Para fazer a requisição que buscas todos os dados da rota alarms do usuario precisa usar o endpoint users , URL_BASE/ users/ adicione o id do usuario ?\_embed = alarms <= e o endpoint "alarms"

GET/ URL_BASE/ users/ id do usuario ?\_embed=alarms <br/>

Resposta {

    "email": "heroku@kenzie.com.br",
    "password": "$2a$10$xxvHLrel22xYmCaFxyLiUOWtAsdyK0FNhqvcTy/t0Dj1M5QRAarIC",
    "name": "luis Fenando",
    "birthDate": "01/03/1998",
    "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
    "id": 8,
    "alarms": [
                {
                    "id": 111,
                    "userId": 8,
                    "title": "title alarm",
                    "status": true,
                    "time": "21:00"
                },
                {
                    "id": 1121,
                    "userId": 8,
                    "title": "title alarm",
                    "status": true,
                    "time": "21:00"
                },
                {
                    "id": 121212,
                    "userId": 8,
                    "title": "title alarm",
                    "status": true,
                    "time": "21:00"
                }
    ]

}

Criar um alarm <br/>
POST/URL_BASE alarms<br/>
JSON{<br/>

    "id": 1, Id unico do alarm

    "userId": 3, Id do usuario que criou o alarm

    "title": "title alarm",

    "time": "21:00",

    "status": "true | false"

} <br/>
resposta {<br/>

    "id": 7,
    "userId": 3,
    "title": "title alarm",
    "status": true,
    "time": "21:00"

}<br/>

Update Alarms<br/>
PATCH URL_BASE alarm/ adicione o id do alarm para ser atualizado<br/>

JSON{<br/>

    "status": true,
    "time": "21:00"

}<br/>

resposta {<br/>

    "id": 7,
    "userId": 3,
    "title": "title alarm",
    "actived": false,
    "time": "21:00"

}<br/>

---

### Tasks<br/>

Listar todas as tasks<br/>
Para fazer a requisição que buscas todos os dados da rota tasks do usuario precisa usar o endpoint users , URL_BASE/ users/ adicione o id do usuario ?\_embed = tasks

Exemplo URL_BASE users/ userID do usuario ?embed=tasks
GET URL_BASE tasks<br/>

Resposta

{

        "email": "heroku@kenzie.com.br",
        "password": "$2a$10$xxvHLrel22xYmCaFxyLiUOWtAsdyK0FNhqvcTy/t0Dj1M5QRAarIC",
        "name": "luis Fenando",
        "birthDate": "01/03/1998",
        "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
        "id": 8,
        "tasks": [
                {

                    "id": 1,
                    "userId": 3,
                    "title": "criando endpoints Atualizando os dados ",
                    "content": "Quebrando a cabeça para criar os endpoints da fake api",
                    "isFinidhed": " typeof: boolean true || false ",
                    "priority": "typeof: boolean true || false"

                }
        ]

}

Criar uma nova task

POST URL_BASE tasks {<br/>

    "id": uuid, <= id do dado
    "userId": 3, <= id do usuario que criou o dado
    "title": "criando task",
    "content": "Quebrando a cabeça para criar os endpoints da fake api",
    "priority": "typeof: boolean true || false",
    "isFinidhed": " false "

}<br/>

Resposta {<br/>

    "id": 2,
    "userId": 3,
    "title": "criando task",
    "content": "Quebrando a cabeça para criar os endpoints da fake api",
    "priority": "typeof: boolean true || false",
    "isFinidhed": " false "

}<br/>

Atualizar uma task <br/>

PATCH URL_BASE tasks/ id da task <br/>
{<br/>

    "priority": "typeof: boolean true || false",

}<br/>

Resposta <br/>
{<br/>

    "id": 1,
    "userId": 3,
    "title": "criando endpoints Atualizando os dados ",
    "content": "Quebrando a cabeça para criar os endpoints da fake api",
    "isFinidhed": " typeof: boolean true || false ",
    "color": " blue | red | yellow ",
    "priority": tru,

}<br/>

Delete uma task <br/>

DELETE URL_BASE tasks/ id da task para deletar<br/>
<br/>
resposta 200ok<br/>

---

### Finance

Rota para listar todos os itens <br/>

Para fazer a requisição que buscas todos os dados da rota finance do usuario precisa usar o endpoint users , URL_BASE/ users/ adicione o id do usuario ?\_embed = finance

Exemplo URL_BASE/users/userID do usuario ?embed=finance<br/>

GET URL_BASE/users/userID do usuario ?embed=finance <br/>
Resposta
{

        "email": "heroku@kenzie.com.br",
        "password": "$2a$10$xxvHLrel22xYmCaFxyLiUOWtAsdyK0FNhqvcTy/t0Dj1M5QRAarIC",
        "name": "luis Fenando",
        "birthDate": "01/03/1998",
        "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
        "id": 8,
        "finance": [
            {
                "id": 8,
                "userId": 8,
                "FitemTitle": "teste",
                "fitemType": " dispesa | recebimemto ",
                "transactionDate": "1/11/2022",
                "fitemValue": 2500
            }
        ]

}

Criar uma um novo item em finance<br/>

POST URL_BASE /finance<br/>
JSON {<br/>

    "id": uuid, <= id do dado

    "userId": 3, <= id do usuario que criou o dado

    "FitemTitle": "Serviço para api's fakes teste de catrgoria",

    "fitemType":" dispesa | recebimemto ",

    "transactionDate": "1/11/2022",

    "fitemValue": 2500

}<br/>

Resposta
{<br/>

    "id": 4,
    "userId": 3,
    "FitemTitle": "Serviço para api's fakes teste de catrgoria",
    "fitemType": " dispesa | recebimemto ",
    "transactionDate": "1/11/2022",
    "fitemValue": 2500

}<br/>

Atualizar um item em finance <br/>
PATCH URL_BASE /financeItens/ Id do item para ser atualizado<br/>
adicione o item a ser atualizado no JSON
JSON {<br/>

    "FitemTitle": "Serviço para apis",
    "fitemType":" dispesa | recebimemto ",
    "fitemValue": 5000

}<br/>

---

### list

Endpoint para listar todos os itens do "list" <br/>

Para fazer a requisição que buscas todos os dados da rota list do usuario precisa usar o endpoint users , URL_BASE/ users/ adicione o id do usuario ?\_embed = list

Exemplo URL_BASE/users/userID do usuario?embed=list<br/>
GET URL_BASE/users/userID do usuario?embed=list <br/>
Resposta

{

        "email": "heroku@kenzie.com.br",
        "password": "$2a$10$xxvHLrel22xYmCaFxyLiUOWtAsdyK0FNhqvcTy/t0Dj1M5QRAarIC",
        "name": "luis Fenando",
        "birthDate": "01/03/1998",
        "profileImg": "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg",
        "id": 8,
        "list": [
                    {
                        "id": 8,
                        "userId": 8,
                        "title": "criando task",
                        "content": "Quebrando a cabeça para criar os endpoints da fake api",
                        "measure": " kg || Lt || Ml || Uni",
                        "amount": "10",
                        "price": 2.99,
                        "priority": "typeof: boolean true || false",
                        "isFinidhed": " false "
                    },
                    {
                        "id": 9,
                        "userId": 8,
                        "title": "criando task",
                        "content": "Quebrando a cabeça para criar os endpoints da fake api",
                        "measure": " kg || Lt || Ml || Uni",
                        "amount": "10",
                        "price": 2.99,
                        "priority": "typeof: boolean true || false",
                        "isFinidhed": " false "
                    }
        ]

}<br/>

Para criar um dado em list<br/>

Endpoint POST URL_BASE/list

{<br/>

    "id": uuid, <= id do dado

    "userId": 3, <= id do usuario que criou o dado

    "title": "criando task",

    "content": "Quebrando a cabeça para criar os endpoints da fake api",

    "measure": " kg || Lt || Ml || Uni"

    "amount": "10"

    "price": 2.99

    "priority": "typeof: boolean true || false",

    "isFinidhed": " false "

}<br/>

Response <br/>

{<br/>

    "id": uuid,

    "userId": 3,

    "title": "criando task",

    "content": "Quebrando a cabeça para criar os endpoints da fake api",

    "measure": " kg || Lt || Ml || Uni"

    "amount": "10"

    "price": 2.99

    "priority": "typeof: boolean true || false",

    "isFinidhed": " false "

}<br/>

Endpoint para atualizar um item <br/>

PATCH URL_BASE list/ adicione o id do obj

JSON{

    "price": 9.99

} <br/>

Response
{<br/>

    "id": 1,

    "userId": 6,

    "title": "criando task",

    "content": "Quebrando a cabeça para criar os endpoints da fake api",

    "measure": " kg || Lt || Ml || Uni",

    "amount": "10",

    "price": 9.99, <== item atualizado

    "priority": "typeof: boolean true || false",

    "isFinidhed": " false "

}<br/>

Rota para deletar um item do list<br/>

DELETE URL_BASE list/ adicione o id do item a ser deletado<br/>

Responta 200OK
