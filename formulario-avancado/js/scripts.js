const parametros = new URLSearchParams(window.location.search);
const resultados = document.querySelector('#resultados');

const primeiro = parametros.get('primeiro');
const sobrenome = parametros.get('sobrenome');
const celular = parametros.get('celular');
const email = parametros.get('email');
const ordenancas = parametros.get('ordenancas');
const data = parametros.get('data');
const local = parametros.get('local');

resultados.innerHTML = `
  <p><strong>Nome:</strong> ${primeiro} ${sobrenome}</p>
  <p><strong>Número de Celular:</strong> ${celular ? celular : 'Não informado'}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Ordenança:</strong> ${ordenancas}</p>
  <p><strong>Data:</strong> ${data}</p>
  <p><strong>Local:</strong> ${local}</p>
`;