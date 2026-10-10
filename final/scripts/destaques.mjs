import { obterJogos } from './dados.mjs';
import { formatarCategoria } from './renderizar.mjs';

const destaquesDiv = document.querySelector('#jogos-destaque');

function exibirDestaques(jogos) {
  destaquesDiv.innerHTML = jogos
    .map(
      (jogo) => `
      <section class="cartao-jogo">
        <img src="imagens/jogos/${jogo.imagem}" alt="${jogo.nome}" width="300" height="200" loading="lazy">
        <h3>${jogo.nome}</h3>
        <p class="jogo-info"><strong>Jogadores:</strong> ${jogo.jogadores}</p>
        <p class="jogo-info"><strong>Duração:</strong> ${jogo.duracao} min</p>
        <p class="jogo-info"><strong>Categoria:</strong> ${formatarCategoria(jogo.categoria)}</p>
      </section>`
    )
    .join('');
}

async function iniciar() {
  const jogos = await obterJogos();
  const embaralhados = jogos.sort(() => Math.random() - 0.5);
  exibirDestaques(embaralhados.slice(0, 3));
}

iniciar();
