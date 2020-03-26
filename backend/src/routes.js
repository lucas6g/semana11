//armazena as rotas da aplicação
const express = require('express')
const routes = express.Router()
const ongsController = require('./controller/ongsController')
const incidentsController = require('./controller/incidentController')
const profileController = require('./controller/profileControler')
const sessionController = require('./controller/sessionControler')


//rota de login 
routes.post('/session',sessionController.create)


//rota de listar ongs do banco 
routes.get('/ongs',ongsController.listarOngs)
//rota de cadastro de uma ong
routes.post('/ongs',ongsController.cadastroOng)

//rota de cadastro de um insidente
routes.post('/insidents',incidentsController.cadastroIncident)

//rota listar casos
routes.get('/insidents',incidentsController.listarCasos)

// rota deleta um caso dentro do banco de dados baseado no id
routes.delete('/insidents/:id',incidentsController.deletarCasos)

//rota que busca casos por id da ong cadastrada
routes.get('/profile',profileController.index)





module.exports = routes