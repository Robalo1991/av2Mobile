const db = require("./DaoFilme.js");

module.exports = {
    configurar: async(servidor) => {
      servidor.put("/alterar/:codigo/:titulo/:genero/:ano",  {
        schema: {
            params: {
                codigo: {
                  type: 'integer'                    
                },
                titulo: {
                  type: 'string'                    
                },
                genero: {
                  type: 'string'                    
                },
                ano: {
                  type: 'integer'                    
                }
            }
        }
    }, module.exports.alterarFilme);
  },
    
  alterarFilme: async (request, reply) => {
    let resposta;

    if(request.params.codigo) {
      resposta = await db.alterarFilme(request.params.codigo, request.params.titulo, request.params.genero, request.params.ano);
      reply.code(200)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
    else {
      resposta = "{'erro': 'codigo não informado para alteração'}"
      reply.code(404)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
  }
  //---------------------------------------------------------------------//
};
