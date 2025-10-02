const celsiusInput = document.getElementById('celsius');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
  const valorDigitado = celsiusInput.value.trim();

  // troca vírgula por ponto para aceitar "2,5"
  const normalized = valorDigitado.replace(',', '.');

  // expressão regular: aceita só número inteiro ou decimal
  const numPattern = /^[+-]?\d+(\.\d+)?$/;

  // se não bater com o padrão, mostra erro
  if (!numPattern.test(normalized)) {
    output.textContent = 'Erro: insira um número válido (ex: 25 ou 2,5).';
    return;
  }

  const c = parseFloat(normalized);
  const f = (c * 1.8) + 32;

  output.textContent = `${c.toFixed(2)} °C = ${f.toFixed(2)} °F`;
});
