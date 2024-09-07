// Função para realizar a pesquisa
function pesquisar() {
	let resultado = ""; // Armazena o HTML gerado com os resultados da pesquisa
	// Obtém o valor do campo de pesquisa e transforma para minúsculas
	let campoPesquisa = document
		.getElementById("campo-pesquisa")
		.value.toLowerCase();
	// Obtém a referência do elemento onde os resultados serão exibidos
	let sessaoResultados = document.getElementById("resultado");

	// Verifica se o campo de pesquisa está vazio
	if (campoPesquisa == "") {
		// Exibe uma mensagem pedindo para digitar uma pesquisa
		sessaoResultados.innerHTML =
			"<p>Digite o gene ou alguma característica desejada, e clique em pesquisar</p>";
		return; // Sai da função se o campo estiver vazio
	}

	// Percorre cada item dos dados para realizar a pesquisa
	for (const dado of dados) {
		// Converte os valores para minúsculas para comparação insensível a maiúsculas
		let nomeGene = dado.nomeGene.toLowerCase();
		let descricaoGene = dado.descricao.toLowerCase();
		let caracteristicaGene = dado.caracteristicas.toLowerCase();
		let encontrouTag = false; // Flag para verificar se alguma tag corresponde à pesquisa

		// Verifica se alguma tag corresponde ao termo de pesquisa
		for (const tag of dado.tags) {
			encontrouTag = tag.toLowerCase().includes(campoPesquisa);
		}

		// Verifica se o termo de pesquisa está presente em algum dos campos
		if (
			nomeGene.includes(campoPesquisa) ||
			descricaoGene.includes(campoPesquisa) ||
			caracteristicaGene.includes(campoPesquisa) ||
			encontrouTag
		) {
			// Adiciona o resultado ao HTML de saída
			resultado += `
              <h2 class="nomeGeneResultado">${dado.nomeGene}</h2>
              <div class="item_resultado">
                  <h4>Descrição</h4>
                  <p>${dado.descricao}</p>
                  <h4>Características</h4>
                  <p>${dado.caracteristicas}</p>
              </div>
            `;
		}
	}

	// Se nenhum resultado foi encontrado, exibe uma mensagem
	if (!resultado) {
		resultado = "<p>Nenhum resultado encontrado!</p>";
	}

	// Atualiza o HTML da seção de resultados com o conteúdo gerado
	sessaoResultados.innerHTML = resultado;
}

// Função para verificar se a tecla pressionada é Enter e chamar a função de pesquisa
function verificarEnter(event) {
	if (event.key === "Enter") {
		event.preventDefault(); // Previne o comportamento padrão do Enter
		pesquisar(); // Chama a função de pesquisa
	}
}

// Função para limpar a pesquisa e o campo de resultados
function limparPesquisa() {
	// Limpa o valor do campo de pesquisa
	document.getElementById("campo-pesquisa").value = "";
	// Limpa o conteúdo da seção de resultados
	document.getElementById("resultado").innerHTML = "";
}
