// ---------- Captura dos elementos ----------

// campo do preço
const precoInput = document.getElementById('preco');
// campo do código de pagamento
const codigoInput = document.getElementById('codigo');
// botão calcular
const calcBtn = document.getElementById('calcBtn');
// área do resultado
const output = document.getElementById('output');

// ---------- Função para mostrar erros ----------
function showError(msg) {
  // Coloca "Erro: ..." no output
  output.textContent = 'Erro: ' + msg;
}

// ---------- Função principal ----------
function calcularPagamento() {
  // pega o valor do preço, tira espaços, troca vírgula por ponto
  const rawPreco = precoInput.value.trim().replace(/\s+/g, '').replace(',', '.');
  // pega o código, tirando espaços
  const rawCodigo = codigoInput.value.trim();

  // regex para validar número decimal
  const numPattern = /^[+]?\d+(\.\d+)?$/;

  // se não for número válido, erro
  if (!numPattern.test(rawPreco)) {
    showError('insira um preço válido (ex: 100, 99.90, 250,75).');
    return;
  }

  // converte preço em número real
  const preco = parseFloat(rawPreco);

  // preço deve ser maior que zero
  if (preco <= 0) {
    showError('o preço deve ser maior que zero.');
    return;
  }

  // regex que só aceita códigos 1 a 4
  const codigoPattern = /^[1-4]$/;

  // se não for um número entre 1 e 4, erro
  if (!codigoPattern.test(rawCodigo)) {
    showError('o código deve ser um número entre 1 e 4.');
    return;
  }

  // converte código em número inteiro
  const codigo = parseInt(rawCodigo, 10);
  let valorFinal;   // valor após cálculo
  let descricao;    // descrição da condição

  // decide cálculo baseado no código
  switch (codigo) {
    case 1:
      valorFinal = preco * 0.9; // desconto 10%
      descricao = 'À vista (dinheiro/PIX) com 10% de desconto';
      break;
    case 2:
      valorFinal = preco * 0.95; // desconto 5%
      descricao = 'À vista (cartão de crédito) com 5% de desconto';
      break;
    case 3:
      valorFinal = preco; // sem desconto, 2x sem juros
      descricao = 'Em 2x sem juros (preço normal)';
      break;
    case 4:
      valorFinal = preco * 1.06; // juros 6%
      descricao = 'Em 3x com juros de 6%';
      break;
  }

  // exibe resultado formatado
  output.textContent =
    `Preço original: R$ ${preco.toFixed(2)}\n` +
    `Condição: ${descricao}\n` +
    `Valor a pagar: R$ ${valorFinal.toFixed(2)}`;
}

// ---------- Eventos ----------

// clique no botão chama a função
calcBtn.addEventListener('click', calcularPagamento);

// pressionar Enter nos inputs também calcula
[precoInput, codigoInput].forEach(inp =>
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calcularPagamento();
  })
);
