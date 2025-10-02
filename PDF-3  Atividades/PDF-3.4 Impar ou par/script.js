// 1) Pegando os elementos do HTML
const inputNumero = document.getElementById('numero');  // campo de digitação
const btn = document.getElementById('btnVerificar');    // botão
const resultado = document.getElementById('resultado'); // parágrafo do resultado

// 2) Quando o botão for clicado, executa a função
btn.addEventListener('click', function() {
    // 3) Pegar o valor digitado no input
    const rawValor = inputNumero.value.trim();

    // 4) Se o campo estiver vazio → erro
    if (rawValor === '') {
        resultado.innerText = 'Por favor, digite um número.';
        return;
    }

    // 5) Tentar converter o valor para número
    const numero = Number(rawValor);

    // 6) Se não for número → erro
    if (Number.isNaN(numero)) {
        resultado.innerText = 'Erro: digite apenas números válidos.';
        return;
    }

    // 7) Verificar se é par ou ímpar
    // Usamos o operador % (resto da divisão por 2)
    if (numero % 2 === 0) {
        resultado.innerText = `O número ${numero} é PAR.`;
    } else {
        resultado.innerText = `O número ${numero} é ÍMPAR.`;
    }
});
