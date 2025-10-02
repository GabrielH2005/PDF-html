const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const sortBtn = document.getElementById('sortBtn');
const output = document.getElementById('output');

function showError(msg) {
  output.textContent = 'Erro: ' + msg;
}

// Função principal
function handleSort() {
  // pega e normaliza (trim, remove espaços internos, troca vírgula por ponto)
  const raw1 = n1.value.trim().replace(/\s+/g, '').replace(',', '.');
  const raw2 = n2.value.trim().replace(/\s+/g, '').replace(',', '.');
  const raw3 = n3.value.trim().replace(/\s+/g, '').replace(',', '.');

  // padrões: inteiro e decimal (para detectar se foi digitado decimal)
  const intPattern = /^[+-]?\d+$/;
  const decimalPattern = /^[+-]?\d+\.\d+$/;

  // valida presença
  if (raw1 === '' || raw2 === '' || raw3 === '') {
    showError('preencha os três valores.');
    return;
  }

  // valida cada valor: se decimal -> erro (exige inteiro). se não for número -> erro.
  if (decimalPattern.test(raw1) || decimalPattern.test(raw2) || decimalPattern.test(raw3)) {
    showError('os valores devem ser inteiros (sem parte decimal).');
    return;
  }

  if (!intPattern.test(raw1) || !intPattern.test(raw2) || !intPattern.test(raw3)) {
    showError('insira apenas números inteiros válidos (ex: 5, -3).');
    return;
  }

  // converte para inteiro
  const a = parseInt(raw1, 10);
  const b = parseInt(raw2, 10);
  const c = parseInt(raw3, 10);

  // verifica se são diferentes
  if (a === b || a === c || b === c) {
    showError('os três valores devem ser diferentes entre si.');
    return;
  }

  // ordena em ordem decrescente
  const sorted = [a, b, c].sort((x, y) => y - x);

  // exibe resultado
  output.textContent = `Ordem decrescente:\n${sorted.join(' > ')}`;
}

// evento de clique
sortBtn.addEventListener('click', handleSort);

// permite Enter em qualquer input para executar
[n1, n2, n3].forEach(inp =>
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSort();
  })
);
