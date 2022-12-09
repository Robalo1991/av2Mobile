const servidor = 'https://servidor-cadastro-de-filmes.glitch.me'
const headers = {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json; charset=utf-8'}

export const incluir = async ( titulo, genero, ano ) => {
  const response = await fetch(`${servidor}/incluir/${titulo}/${genero}/${parseInt(ano)}`, { method: 'GET', headers }); 
  return await response.json();
}

export const excluir = async (codigo) => {
  await fetch(`${servidor}/excluir/${parseInt(codigo)}`, { method: 'DELETE', headers });
}

export const alterar = async ( codigo, titulo, genero, ano ) => {
  const response = await fetch(`${servidor}/alterar/${parseInt(codigo)}/${titulo}/${genero}/${parseInt(ano)}`, { method: 'PUT', headers });
}
      
export const obter = async () => {
  const response = await fetch(`${servidor}/`, { method: 'GET', headers });
  return await response.json();
}

