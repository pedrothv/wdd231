const parametros = new URLSearchParams(window.location.search);
const resultados = document.querySelector('#resultados-contato');

const nome = parametros.get('nome');
const email = parametros.get('email');
const assunto = parametros.get('assunto');
const mensagem = parametros.get('mensagem');
const dataEnvio = parametros.get('dataEnvio');

resultados.innerHTML = `
  <p><strong>Nome</strong>: ${nome}</p>
  <p><strong>E-mail</strong>: ${email}</p>
  <p><strong>Assunto</strong>: ${assunto}</p>
  <p><strong>Mensagem</strong>: ${mensagem}</p>
  <p><strong>Data do envio</strong>: ${dataEnvio}</p>
`;
