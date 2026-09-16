const latCamara = -22.91;
const lonCamara = -43.17;
const chaveApi = 'e6d369c7cb10b3ce40b328dad06489a6';

const urlClimaAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${latCamara}&lon=${lonCamara}&units=metric&appid=${chaveApi}`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${latCamara}&lon=${lonCamara}&units=metric&appid=${chaveApi}`;

const climaAtualDiv = document.querySelector('#clima-atual');
const previsaoLista = document.querySelector('#previsao-3-dias');

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

async function buscarClimaAtual() {
  try {
    const resposta = await fetch(urlClimaAtual);
    if (resposta.ok) {
      const dados = await resposta.json();
      exibirClimaAtual(dados);
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}

function exibirClimaAtual(dados) {
  const temperatura = Math.round(dados.main.temp);
  const descricao = dados.weather[0].description;
  const icone = dados.weather[0].icon;

  climaAtualDiv.innerHTML = `
    <img src="https://openweathermap.org/img/w/${icone}.png" alt="${descricao}">
    <p class="temperatura-atual">${temperatura}&deg;C</p>
    <p class="descricao-clima">${descricao}</p>
  `;
}

async function buscarPrevisao() {
  try {
    const resposta = await fetch(urlPrevisao);
    if (resposta.ok) {
      const dados = await resposta.json();
      exibirPrevisao(dados.list);
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}

function exibirPrevisao(lista) {
  const previsoesDoMeioDia = lista.filter((item) => item.dt_txt.includes('12:00:00'));
  const proximosTresDias = previsoesDoMeioDia.slice(0, 3);

  previsaoLista.innerHTML = '';

  proximosTresDias.forEach((item) => {
    const dataItem = new Date(item.dt * 1000);
    const nomeDoDia = diasDaSemana[dataItem.getDay()];
    const temperatura = Math.round(item.main.temp);

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="previsao-dia">${nomeDoDia}</span>
      <span class="previsao-temp">${temperatura}&deg;C</span>
    `;
    previsaoLista.appendChild(li);
  });
}

buscarClimaAtual();
buscarPrevisao();