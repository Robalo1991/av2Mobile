const db = require("./DaoFilme.js");

module.exports = {
    configurar: async(servidor) => {    
    servidor.get("/", module.exports.obterFilmes);
  },
    
  obterFilmes: async (request, reply) => {
    let resposta = await db.obterFilmes();
    console.log('Requisição feita - Obter Filmes:' + resposta);
    reply.code(200)
         .header('Content-Type', 'application/json; charset=utf-8')
         .header('Access-Control-Allow-Origin', '*')
         .send(resposta);
  },
};
