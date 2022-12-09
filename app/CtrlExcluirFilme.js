const db = require("./DaoFilme.js");

module.exports = {
    configurar: async(servidor) => {
      servidor.delete("/excluir/:codigo",  {
        schema: {
            params: {
                codigo: {
                    type: 'integer'                    
                }
            }
        }
    }, module.exports.excluirFilme);
  },
    
  excluirFilme: async (request, reply) => {
    let resposta;

    if(request.params.codigo) {
      resposta = await db.excluirFilme(request.params.codigo);
      reply.code(200)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
    else {
      resposta = "{'erro': 'codigo não informado para exclusão'}"
      reply.code(404)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
  }
  //---------------------------------------------------------------------//
};
