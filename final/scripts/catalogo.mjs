import { obterJogos } from './dados.mjs';
import { criarCartaoJogo, formatarCategoria } from './renderizar.mjs';
import { obterFavoritos, ehFavorito, alternarFavorito } from './favoritos.mjs';

const galeria = document.querySelector('#galeria-jogos');
const botoesFiltro = document.querySelectorAll('.filtro-categoria');
const totalJogos = document.querySelector('#total-jogos');
const detalhesJogo = document.querySelector('#detalhes-jogo');

let todosOsJogos = [];

function renderizarJogos(lista) {
  galeria.innerHTML = '';
  lista.forEach((jogo) => {
    const cartao = criarCartaoJogo(jogo, ehFavorito(jogo.id));
    galeria.appendChild(cartao);
  });

  totalJogos.textContent = `Exibindo ${lista.length} ${lista.length === 1 ? 'jogo' : 'jogos'}`;
}

function filtrarJogos(categoria) {
  if (categoria === 'todos') {
    return todosOsJogos;
  }
  if (categoria === 'favoritos') {
    const favoritos = obterFavoritos();
    return todosOsJogos.filter((jogo) => favoritos.includes(jogo.id));
  }
  return todosOsJogos.filter((jogo) => jogo.categoria === categoria);
}

function categoriaAtiva() {
  return document.querySelector('.filtro-categoria.ativo').dataset.categoria;
}

function exibirDetalhesJogo(jogo) {
  detalhesJogo.innerHTML = `
    <button id="fecharModalJogo">✕</button>
    <h2>${jogo.nome}</h2>
    <p><strong>Categoria</strong>: ${formatarCategoria(jogo.categoria)}</p>
    <p><strong>Jogadores</strong>: ${jogo.jogadores}</p>
    <p><strong>Duração</strong>: ${jogo.duracao} minutos</p>
    <p><strong>Idade mínima</strong>: ${jogo.idadeMinima} anos</p>
    <p>${jogo.descricao}</p>
  `;
  detalhesJogo.showModal();

  document.querySelector('#fecharModalJogo').addEventListener('click', () => {
    detalhesJogo.close();
  });
}

detalhesJogo.addEventListener('click', (evento) => {
  if (evento.target === detalhesJogo) {
    detalhesJogo.close();
  }
});

galeria.addEventListener('click', (evento) => {
  const idClicado = evento.target.dataset.id;
  if (!idClicado) {
    return;
  }

  if (evento.target.classList.contains('botao-detalhes')) {
    const jogo = todosOsJogos.find((j) => j.id === idClicado);
    exibirDetalhesJogo(jogo);
  }

  if (evento.target.classList.contains('botao-favorito')) {
    alternarFavorito(idClicado);
    renderizarJogos(filtrarJogos(categoriaAtiva()));
  }
});

botoesFiltro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach((b) => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    renderizarJogos(filtrarJogos(botao.dataset.categoria));
  });
});

async function iniciar() {
  todosOsJogos = await obterJogos();
  renderizarJogos(todosOsJogos);
}

iniciar();
