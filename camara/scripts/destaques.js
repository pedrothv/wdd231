const urlMembros = 'dados/membros.json';
const destaquesDiv = document.querySelector('#destaques-membros');

async function buscarDestaques() {
  const resposta = await fetch(urlMembros);
  const dados = await resposta.json();

  const elegiveis = dados.membros.filter((membro) => membro.nivel === 2 || membro.nivel === 3);
  const embaralhados = elegiveis.sort(() => Math.random() - 0.5);
  const selecionados = embaralhados.slice(0, 3);

  exibirDestaques(selecionados);
}

const exibirDestaques = (membros) => {
  membros.forEach((membro) => {
    const cartao = document.createElement('section');
    cartao.classList.add('cartao-membro');

    const logo = document.createElement('img');
    logo.setAttribute('src', `imagens/${membro.imagem}`);
    logo.setAttribute('alt', `Logotipo de ${membro.nome}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '48');
    logo.setAttribute('height', '48');

    const nome = document.createElement('h3');
    nome.textContent = membro.nome;

    const endereco = document.createElement('p');
    endereco.textContent = membro.endereco;

    const telefone = document.createElement('p');
    telefone.textContent = membro.telefone;

    const site = document.createElement('a');
    site.setAttribute('href', membro.site);
    site.setAttribute('target', '_blank');
    site.textContent = 'Visitar site';

    const selo = document.createElement('span');
    selo.classList.add('selo-nivel');
    if (membro.nivel === 3) {
      selo.classList.add('nivel-3');
      selo.textContent = 'Membro Ouro';
    } else {
      selo.classList.add('nivel-2');
      selo.textContent = 'Membro Prata';
    }

    cartao.appendChild(logo);
    cartao.appendChild(nome);
    cartao.appendChild(endereco);
    cartao.appendChild(telefone);
    cartao.appendChild(site);
    cartao.appendChild(selo);

    destaquesDiv.appendChild(cartao);
  });
};

buscarDestaques();