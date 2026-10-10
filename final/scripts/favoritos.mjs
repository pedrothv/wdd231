const CHAVE_ARMAZENAMENTO = 'cantinhoDosJogosFavoritos';

export function obterFavoritos() {
  const dadosSalvos = localStorage.getItem(CHAVE_ARMAZENAMENTO);
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

export function ehFavorito(id) {
  return obterFavoritos().includes(id);
}

export function alternarFavorito(id) {
  const favoritos = obterFavoritos();
  const indice = favoritos.indexOf(id);

  if (indice >= 0) {
    favoritos.splice(indice, 1);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(favoritos));
  return favoritos;
}
