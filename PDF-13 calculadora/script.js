// Adiciona um valor ao final do conteúdo do display
function appendToDisplay(value) {
    document.getElementById('display').value += value // Concatena o novo valor ao texto existente
}

// Limpa completamente o conteúdo do display
function clearDisplay() {
    document.getElementById('display').value = '' // Define o display como vazio
}

// Calcula o resultado da expressão mostrada no display
function calculate() {
    const display = document.getElementById('display') // Pega o elemento display

    try {
        // Usa eval para interpretar a expressão matemática digitada
        display.value = eval(display.value)
    } catch (error) {
        // Se a expressão for inválida, mostra 'Erro'
        display.value = 'Erro'
    }
}

// Remove o último caractere digitado
function back () {
    const display = document.getElementById('display') // Pega o display
    display.value = display.value.slice(0, -1) // Remove o último caractere da string
}
