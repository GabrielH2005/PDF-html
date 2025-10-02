// Pegar os elementos
const inputNascimento = document.getElementById('anoNascimento'); 
const inputAtual = document.getElementById('anoAtual');           
const btn = document.getElementById('btnCalcular');              
const resultado = document.getElementById('resultado');          

// Quando clicar no botão
btn.addEventListener('click', function() {
    const rawNascimento = inputNascimento.value.trim();
    const rawAtual = inputAtual.value.trim();

    // 1) Se algum campo estiver vazio
    if (rawNascimento === '' || rawAtual === '') {
        resultado.innerText = 'Por favor, preencha os dois campos.';
        return;
    }

    // 2) Converter para número
    const nascimento = Number(rawNascimento);
    const atual = Number(rawAtual);

    // 3) Verificar se o valor é inválido (NaN = Not a Number)
    if (Number.isNaN(nascimento) || Number.isNaN(atual)) {
        resultado.innerText = 'Erro: insira apenas números válidos.';
        return;
    }

    // 4) Verificar lógica: nascimento maior que ano atual
    if (nascimento > atual) {
        resultado.innerText = 'Ano de nascimento não pode ser maior que o ano atual.';
        return;
    }

    // 5) Calcular idades
    const idadeAtual = atual - nascimento;    
    const idade2050 = 2050 - nascimento;      

    // 6) Mostrar resultado
    resultado.innerText = `Idade atual: ${idadeAtual} anos | Idade em 2050: ${idade2050} anos`;
});
