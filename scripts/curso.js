const cursos = [
  {
    assunto: 'CSE',
    numero: 110,
    titulo: 'Introduction to Programming',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Introdução à programação: variáveis, decisões, cálculos, loops, arrays e entrada/saída de dados.',
    tecnologia: ['Python'],
    concluido: true,
  },
  {
    assunto: 'WDD',
    numero: 130,
    titulo: 'Web Fundamentals',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Introdução à World Wide Web e às carreiras em design e desenvolvimento de sites, com prática de HTML e CSS.',
    tecnologia: ['HTML', 'CSS'],
    concluido: true,
  },
  {
    assunto: 'CSE',
    numero: 111,
    titulo: 'Programming with Functions',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Escrita, chamada, depuração e teste de funções próprias, além de tratamento de erros.',
    tecnologia: ['Python'],
    concluido: true,
  },
  {
    assunto: 'CSE',
    numero: 210,
    titulo: 'Programming with Classes',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Introdução a classes e objetos, encapsulamento, herança e polimorfismo.',
    tecnologia: ['C#'],
    concluido: true,
  },
  {
    assunto: 'WDD',
    numero: 131,
    titulo: 'Dynamic Web Fundamentals',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Criação de sites dinâmicos que usam JavaScript para responder a eventos e atualizar conteúdo.',
    tecnologia: ['HTML', 'CSS', 'JavaScript'],
    concluido: true,
  },
  {
    assunto: 'WDD',
    numero: 231,
    titulo: 'Frontend Web Development I',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao:
      'Foco em experiência do usuário, acessibilidade, conformidade, performance e uso básico de APIs.',
    tecnologia: ['HTML', 'CSS', 'JavaScript'],
    concluido: false,
  },
];

const listaCursos = document.querySelector('#lista-cursos');
const totalCreditos = document.querySelector('#total-creditos');
const botoesFiltro = document.querySelectorAll('.filtro-btn');

function renderizarCursos(listaFiltrada) {
  listaCursos.innerHTML = listaFiltrada
    .map(
      (curso) => `
      <div class="curso-card ${curso.concluido ? 'concluido' : ''}">
        <div class="curso-titulo">
          <span>${curso.assunto} ${curso.numero}</span>
          ${curso.concluido ? '<span class="curso-selo">CONCLUÍDO</span>' : ''}
        </div>
        <p class="curso-descricao">${curso.titulo} · ${curso.creditos} créditos</p>
      </div>`
    )
    .join('');

  const creditos = listaFiltrada.reduce((soma, curso) => soma + curso.creditos, 0);
  totalCreditos.textContent = `O total de créditos para os cursos listados acima é ${creditos}`;
}

function filtrarCursos(categoria) {
  if (categoria === 'Todos') {
    return cursos;
  }
  return cursos.filter((curso) => curso.assunto === categoria);
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach((b) => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    renderizarCursos(filtrarCursos(botao.dataset.filtro));
  });
});

renderizarCursos(cursos);