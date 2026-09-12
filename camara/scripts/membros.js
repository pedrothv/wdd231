const url = 'dados/membros.json';

const listaMembros = document.querySelector('#lista-membros');
const botaoGrade = document.querySelector('#botao-grade');
const botaoLista = document.querySelector('#botao-lista');

async function obterDadosDeMembros() {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  exibirMembros(dados.membros);
}

const exibirMembros = (membros) => {
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

    const descricao = document.createElement('p');
    descricao.textContent = membro.descricao;

    const site = document.createElement('a');
    site.setAttribute('href', membro.site);
    site.setAttribute('target', '_blank');
    site.textContent = 'Visitar site';

    const selo = document.createElement('span');
    selo.classList.add('selo-nivel');
    if (membro.nivel === 3) {
      selo.classList.add('nivel-3');
      selo.textContent = 'Membro Ouro';
    } else if (membro.nivel === 2) {
      selo.classList.add('nivel-2');
      selo.textContent = 'Membro Prata';
    } else {
      selo.classList.add('nivel-1');
      selo.textContent = 'Membro';
    }

    cartao.appendChild(logo);
    cartao.appendChild(nome);
    cartao.appendChild(endereco);
    cartao.appendChild(telefone);
    cartao.appendChild(descricao);
    cartao.appendChild(site);
    cartao.appendChild(selo);

    listaMembros.appendChild(cartao);
  });
};

botaoGrade.addEventListener('click', () => {
  listaMembros.classList.remove('visualizacao-lista');
  listaMembros.classList.add('visualizacao-grade');
  botaoGrade.classList.add('ativo');
  botaoLista.classList.remove('ativo');
});

botaoLista.addEventListener('click', () => {
  listaMembros.classList.remove('visualizacao-grade');
  listaMembros.classList.add('visualizacao-lista');
  botaoLista.classList.add('ativo');
  botaoGrade.classList.remove('ativo');
});

obterDadosDeMembros();