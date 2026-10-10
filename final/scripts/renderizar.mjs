const nomesDeCategorias = {
  estrategia: 'Estratégia',
  familia: 'Família',
  party: 'Party',
  classico: 'Clássico',
  cooperativo: 'Cooperativo',
};

export function formatarCategoria(categoria) {
  return nomesDeCategorias[categoria] || categoria;
}

export function criarCartaoJogo(jogo, favoritado) {
  const cartao = document.createElement('section');
  cartao.classList.add('cartao-jogo');
  cartao.dataset.id = jogo.id;

  cartao.innerHTML = `
    <img src="imagens/jogos/${jogo.imagem}" alt="${jogo.nome}" width="300" height="200" loading="lazy">
    <h2>${jogo.nome}</h2>
    <p class="jogo-info"><strong>Jogadores:</strong> ${jogo.jogadores}</p>
    <p class="jogo-info"><strong>Duração:</strong> ${jogo.duracao} min</p>
    <p class="jogo-info"><strong>Categoria:</strong> ${formatarCategoria(jogo.categoria)}</p>
    <div class="cartao-acoes">
      <button class="botao-favorito ${favoritado ? 'favoritado' : ''}" data-id="${jogo.id}">
        ${favoritado ? '♥ Favorito' : '♡ Favoritar'}
      </button>
      <button class="botao-detalhes" data-id="${jogo.id}">Saiba mais</button>
    </div>
  `;

  return cartao;
}
