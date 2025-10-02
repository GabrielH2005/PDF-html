// Captura os elementos da página
const alturaInput = document.getElementById('altura'); // Campo de altura
const calcBtn = document.getElementById('calcBtn');    // Botão de calcular
const output = document.getElementById('output');      // Área de resultado

// Função auxiliar para mostrar erros de forma padronizada
function showError(msg) {
  output.textContent = 'Erro: ' + msg;
}

// Função principal que calcula o peso ideal
function calcularPesoIdeal() {
  // Pega o valor digitado, tira espaços, troca vírgula por ponto
  const raw = alturaInput.value.trim().replace(/\s+/g, '').replace(',', '.');

  // Expressão regular para aceitar números inteiros ou decimais positivos
  const numPattern = /^[+]?\d+(\.\d+)?$/;

  // Se não bater com a regex, mostra erro
  if (!numPattern.test(raw)) {
    showError('insira uma altura válida (ex: 1,75).');
    return;
  }

  // Converte para número
  const altura = parseFloat(raw);

  // Alturas absurdas ou negativas não fazem sentido
  if (altura <= 0 || altura > 3) {
    showError('altura deve estar entre 0 e 3 metros.');
    return;
  }

  // Verifica se o sexo foi selecionado
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
  if (!sexoSelecionado) {
    showError('selecione o sexo.');
    return;
  }

  // Pega valor do sexo: "M" ou "F"
  const sexo = sexoSelecionado.value;
  let pesoIdeal;

  // Fórmulas do peso ideal
  if (sexo === 'M') {
    pesoIdeal = (72.7 * altura) - 58; // Fórmula para homens
  } else {
    pesoIdeal = (62.1 * altura) - 44.7; // Fórmula para mulheres
  }

  // Exibe resultado formatado
  output.textContent =
    `Altura: ${altura.toFixed(2)} m\n` +
    `Sexo: ${sexo === 'M' ? 'Masculino' : 'Feminino'}\n` +
    `Peso ideal: ${pesoIdeal.toFixed(2)} kg`;
}

// Evento: clicar no botão chama a função
calcBtn.addEventListener('click', calcularPesoIdeal);

// Também permite calcular apertando "Enter" no campo altura
alturaInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') calcularPesoIdeal();
});
