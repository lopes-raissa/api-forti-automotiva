const Cliente = require("../models/Cliente");

module.exports = {

    async listarClientes(req, res) {

        try{
            const cliente = await Cliente.findAll();

            res.send(cliente);
        } catch (error) { 

            console.log(error);

            res.status(500).send({error});
        }
    },


    async adicionarClientes(req, res) {
        const {cliente, produto, quantidade} = req.body;

        try{
            let clienteCadastro = await Cliente.findOne({
                where:{
                    cliente
                }
            })

            if(clienteCadastro)
                return res.status(400).send({erro: "Cliente já cadastrado"});

                clienteCadastro = await Cliente.create({cliente, produto, quantidade});

            // Retorna resposta de sucesso
            res.status(201).send(clienteCadastro);

        }catch (error) {
            console.log(error);
            res.status(500).send({error});
        }
    }
}