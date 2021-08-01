const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })

    //rota PUT usada quando ha necessidade de alteração de um objeto inteiro (mesmo que os valores sejam os mesmos)
    //rota PATCH quando ha necessidade de alteração pontual dentro de um objeto
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        
        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)
    })
}