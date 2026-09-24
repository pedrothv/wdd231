const niveisInfo = [
  {
    chave: 'np',
    nome: 'Associação NP',
    taxa: 'Sem taxa',
    beneficios: [
      'Listagem básica no diretório de membros',
      'Acesso a eventos de networking',
      'Recebimento do boletim mensal',
    ],
  },
  {
    chave: 'bronze',
    nome: 'Associação Bronze',
    taxa: 'R$ 50/mês',
    beneficios: [
      'Tudo do nível NP',
      'Desconto em eventos pagos da câmara',
      'Divulgação nas redes sociais da câmara',
    ],
  },
  {
    chave: 'silver',
    nome: 'Associação Prata',
    taxa: 'R$ 120/mês',
    beneficios: [
      'Tudo do nível Bronze',
      'Participação em treinamentos exclusivos',
      'Posição de destaque no diretório',
    ],
  },
  {
    chave: 'gold',
    nome: 'Associação Ouro',
    taxa: 'R$ 250/mês',
    beneficios: [
      'Tudo do nível Prata',
      'Banner na página inicial da câmara',
      'Patrocínio de um evento por ano',
      'Convite para almoços exclusivos com a diretoria',
    ],
  },
];

const campoDataEnvio = document.querySelector('#dataEnvio');
campoDataEnvio.value = new Date().toLocaleString('pt-BR');

const niveisAssociacao = document.querySelector('.niveis-associacao');
const detalhesAssociacao = document.querySelector('#detalhes-associacao');

function exibirDetalhesNivel(nivel) {
  const beneficiosHtml = nivel.beneficios.map((item) => `<li>${item}</li>`).join('');

  detalhesAssociacao.innerHTML = `
    <button id="fecharModalNivel">✕</button>
    <h2>${nivel.nome}</h2>
    <p><strong>Taxa</strong>: ${nivel.taxa}</p>
    <ul>${beneficiosHtml}</ul>
  `;
  detalhesAssociacao.showModal();

  const fecharModalNivel = document.querySelector('#fecharModalNivel');
  fecharModalNivel.addEventListener('click', () => {
    detalhesAssociacao.close();
  });
}

niveisAssociacao.addEventListener('click', (evento) => {
  if (evento.target.classList.contains('saiba-mais')) {
    evento.preventDefault();
    const cartao = evento.target.closest('.cartao-nivel');
    const chaveNivel = cartao.dataset.nivel;
    const nivel = niveisInfo.find((item) => item.chave === chaveNivel);
    exibirDetalhesNivel(nivel);
  }
});

detalhesAssociacao.addEventListener('click', (evento) => {
  if (evento.target === detalhesAssociacao) {
    detalhesAssociacao.close();
  }
});