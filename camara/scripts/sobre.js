import pontosDeInteresse from '../data/pontos-interesse.mjs';

const galeria = document.querySelector('#galeria-pontos');
const detalhesPonto = document.querySelector('#detalhes-ponto');

function exibirDetalhesPonto(ponto) {
  detalhesPonto.innerHTML = `
    <button id="fecharModalPonto">✕</button>
    <h2>${ponto.nome}</h2>
    <address>${ponto.endereco}</address>
    <p>${ponto.descricao}</p>
  `;
  detalhesPonto.showModal();

  const fecharModalPonto = document.querySelector('#fecharModalPonto');
  fecharModalPonto.addEventListener('click', () => {
    detalhesPonto.close();
  });
}

detalhesPonto.addEventListener('click', (evento) => {
  if (evento.target === detalhesPonto) {
    detalhesPonto.close();
  }
});

function exibirPontos(pontos) {
  pontos.forEach((ponto, indice) => {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao-ponto', `ponto-${indice + 1}`);

    const titulo = document.createElement('h2');
    titulo.textContent = ponto.nome;

    const figura = document.createElement('figure');
    const imagem = document.createElement('img');
    imagem.setAttribute('src', `imagens/pontos/${ponto.imagem}`);
    imagem.setAttribute('alt', ponto.nome);
    imagem.setAttribute('loading', 'lazy');
    imagem.setAttribute('width', '300');
    imagem.setAttribute('height', '200');
    figura.appendChild(imagem);

    const endereco = document.createElement('address');
    endereco.textContent = ponto.endereco;

    const descricao = document.createElement('p');
    descricao.textContent = ponto.descricao;

    const botao = document.createElement('button');
    botao.textContent = 'Saiba mais';
    botao.addEventListener('click', () => {
      exibirDetalhesPonto(ponto);
    });

    cartao.appendChild(titulo);
    cartao.appendChild(figura);
    cartao.appendChild(endereco);
    cartao.appendChild(descricao);
    cartao.appendChild(botao);

    galeria.appendChild(cartao);
  });
}

exibirPontos(pontosDeInteresse);

const mensagemVisita = document.querySelector('#mensagem-visita');
const ultimaVisitaArmazenada = localStorage.getItem('ultimaVisitaCamara');
const agora = Date.now();

if (!ultimaVisitaArmazenada) {
  mensagemVisita.textContent = 'Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.';
} else {
  const diferencaEmMs = agora - Number(ultimaVisitaArmazenada);
  const diferencaEmDias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));

  if (diferencaEmDias < 1) {
    mensagemVisita.textContent = 'Já voltou? Que legal!';
  } else if (diferencaEmDias === 1) {
    mensagemVisita.textContent = 'Seu último acesso foi há 1 dia.';
  } else {
    mensagemVisita.textContent = `Seu último acesso foi há ${diferencaEmDias} dias.`;
  }
}

localStorage.setItem('ultimaVisitaCamara', agora.toString());