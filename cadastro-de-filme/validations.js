export const validarCodigo = (cod) => {
  if (cod == null || cod == "" || cod == undefined) return false;
  return /\b([1-9]|[1-9][0-9]|100)\b/.test(cod);
}

export const validarTitulo = (titulo) => {
  if (titulo == null || titulo == "" || titulo == undefined) return false;
  if (titulo.length > 40) return false;
  return true;
}

export const validarGenero = (genero) => {
  if (genero == null || genero == "" || genero == undefined) return false;
  if (genero.length > 40) return false;
  return /(\w+)/.test(genero);
}

export const validarAno = (ano) => {
  if (ano == null || ano == "" || ano == undefined) return false;
  return /^\d{4}$/.test(ano);
}

export const validarCampos = (codigo, titulo, genero, ano, type) => {
  const errors = []
  if([codigo, titulo, genero, ano].find(attr => attr === undefined) && type === 'cadastro') errors.push('Há campo(s) vazio(s).') 
  if(!validarCodigo(codigo)) errors.push('Código incorreto')
  if(!validarTitulo(titulo)) errors.push('Título incorreto')
  if(!validarGenero(genero)) errors.push('Gênero incorreto')
  if(!validarAno(ano)) errors.push('Ano incorreto')
  if( type === 'editar' && titulo === undefined && genero === undefined && ano === undefined) errors.push('Nenhum campo foi alterado.')

  return errors 
}