const parametros = new URLSearchParams(window.location.search);
const resultadosAssociacao = document.querySelector('#resultados-associacao');

const nome = parametros.get('nome');
const sobrenome = parametros.get('sobrenome');
const email = parametros.get('email');
const celular = parametros.get('celular');
const organizacao = parametros.get('organizacao');
const dataEnvio = parametros.get('dataEnvio');

resultadosAssociacao.innerHTML = `
  <p><strong>Nome</strong>: ${nome} ${sobrenome}</p>
  <p><strong>E-mail</strong>: ${email}</p>
  <p><strong>Celular</strong>: ${celular}</p>
  <p><strong>Empresa/Organização</strong>: ${organizacao}</p>
  <p><strong>Data do envio</strong>: ${dataEnvio}</p>
`;