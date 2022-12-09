/**
 * Módulo para manipular o banco de dados SQLite
 */

// Para acesso ao FileSystem
const fs = require("fs");

// Inicialização do Banco de Dados
const dbFile = "./.data/filme.db";
const dbExiste = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");
let db;

// Solicitando a abertura do Banco de Dados
sqlite.open({ filename: dbFile, driver: sqlite3.Database})
  .then(async dBase => {
    db = dBase;
    try {
      if (!dbExiste) {
        await db.run(
          "CREATE TABLE Filme(codigo INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR[40], genero VARCHAR[20], ano INTEGER)"
        );
        
      } else {
        console.log(await db.all("SELECT * from Filme"));
      }
    } catch (dbError) {
      console.error(dbError);
    }
  });

module.exports = {
  obterFilmes: async () => {
    try {
      let retorno =  await db.all("SELECT codigo as Codigo, titulo as Titulo, genero as Gerero, ano as Ano from Filme");
      console.log(retorno);
      return retorno;
    } catch (dbError) {
      console.error(dbError);
      return [];
    }
  },

  incluirFilme: async (titulo, genero, ano) => {
    try {
      let retorno = await db.run("INSERT INTO Filme (titulo, genero, ano) VALUES (?, ?, ?)", 
                     [titulo, genero, ano]);  
      console.log('incluir : ' + retorno);
      return retorno;
    } catch (dbError) {
      console.error(dbError);
    }
  },

  alterarFilme: async (codigo, titulo, genero, ano) => {
    try {
      let retorno = await db.run("UPDATE Filme set Titulo = ?, Gerero = ?, Ano = ? WHERE Codigo = ?", 
                     [codigo, titulo, genero, ano]);  
      return retorno;
    } catch (dbError) {
      console.error(dbError);
    }
  },

  excluirFilme: async (codigo) => {
    try {
      await db.run("DELETE from Filme WHERE Codigo = ?", 
                     [codigo]);  
      return true;
    } catch (dbError) {
      console.error(dbError);
    }
  }
}
