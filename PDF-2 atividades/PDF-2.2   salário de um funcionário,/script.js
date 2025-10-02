// 1) Pegando os elementos do HTML
const inputSalario = document.getElementById('salario');  // campo onde o usuário digita
const btn = document.getElementById('btnCalcular');       // botão "Calcular"
const resultado = document.getElementById('resultado');   // parágrafo para mostrar resposta

// 2) Adicionando ação ao botão
btn.addEventListener('click', function() {
    // 3) Pegar o valor digitado e tirar espaços extras
    const rawSalario = inputSalario.value.trim();

    // 4) Se o campo estiver vazio → erro
    if (rawSalario === '') {
        resultado.innerText = 'Por favor, digite o salário.';
        return; // para aqui
    }

    // 5) Tentar converter para número
    const salario = Number(rawSalario);

    // 6) Se não for número válido (ex: "abc") → erro
    if (Number.isNaN(salario)) {
        resultado.innerText = 'Erro: insira apenas números válidos para o salário.';
        return;
    }

    // 7) Calcular o novo salário (25% de aumento)
    const novoSalario = salario * 1.25;

    // 8) Mostrar resultado formatado com duas casas decimais
    resultado.innerText = `Novo salário: R$ ${novoSalario.toFixed(2)}`;
});
