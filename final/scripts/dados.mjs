export async function obterJogos() {
  try {
    const resposta = await fetch('dados/jogos.json');

    if (!resposta.ok) {
      throw Error(`Erro ao buscar os dados: ${resposta.status}`);
    }

    const dados = await resposta.json();
    return dados.jogos;
  } catch (erro) {
    console.error('Não foi possível carregar o catálogo de jogos:', erro);
    return [];
  }
}
