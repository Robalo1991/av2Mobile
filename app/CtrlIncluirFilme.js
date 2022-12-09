const db = require("./DaoFilme.js");

module.exports = {
    configurar: async(servidor) => {
      // Solicita a inclusão de um aluno
      servidor.get("/incluir/:titulo/:genero/:ano",  {
        schema: {
            params: {
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
    }, module.exports.incluirFilme);
  },
    
  incluirFilme: async (request, reply) => {
    let resposta;
    
    if(request.params.titulo) {
      resposta = await db.incluirFilme(request.params.titulo, request.params.genero, request.params.ano);
      reply.code(200)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
    else {
      resposta = "{'erro': 'titulo  não informado para inclusão'}"
      reply.code(404)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
    }
  }
  //---------------------------------------------------------------------//
};
