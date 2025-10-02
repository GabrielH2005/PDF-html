const form = document.getElementById("hipotenusaForm");
const resultado = document.getElementById("resultado");

function validarNumero(valor) {
  valor = valor.replace(",", ".");
  if (!/^\d+(\.\d+)?$/.test(valor)) {
    return null;
  }
  return parseFloat(valor);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const c1 = validarNumero(document.getElementById("cateto1").value.trim());
  const c2 = validarNumero(document.getElementById("cateto2").value.trim());

  // Caso inválido ou vazio, mostra a mensagem abaixo em vermelho
  if (c1 === null || c2 === null) {
    resultado.textContent = "Por favor, insira apenas números válidos.";
    resultado.style.color = "red";
    return;
  }

  const h = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
  resultado.textContent = `O valor da hipotenusa é: ${h.toFixed(2)}`;
  resultado.style.color = "green";
});
