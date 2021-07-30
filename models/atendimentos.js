//aqui executa toda parte de conexão entre controlers e infraestrutura
const conexao = require('../infraestrutura/conexao')
const conexão = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento