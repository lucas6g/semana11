const Ong = require('../models/ongsScema')
const cripto = require('crypto')

module.exports = {

    async listarOngs(req,res){

      const ongsArray =  await Ong.findAll()
      
      return res.json(ongsArray)
    },



    async cadastroOng(req,res){
        
            const {name,email,whatsapp,city,uf} = req.body
            
            //gera um id para cada ong
            const id = cripto.randomBytes(4).toString('HEX')
            
             await Ong.create({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
            
        
           
            //id funcina como um cpf para se conectar na app
            return res.json({id})

    },

    

    
}
