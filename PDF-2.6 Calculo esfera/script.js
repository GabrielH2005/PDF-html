const form = document.getElementById("esferaForm");
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

  const r = validarNumero(document.getElementById("raio").value.trim());

  // Se inválido ou vazio, mostra a mensagem embaixo
  if (r === null) {
    resultado.innerHTML = "<span style='color:red'>Por favor, insira um número válido.</span>";
    return;
  }

  // Fórmulas corrigidas:
  // Comprimento (circunferência): 2 * π * r
  const comprimento = 2 * Math.PI * r;
  // Área de superfície da esfera: 4 * π * r^2  <-- CORREÇÃO
  const area = 4 * Math.PI * Math.pow(r, 2);
  // Volume da esfera: (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  resultado.innerHTML = `
    <p style="color:green">Comprimento (circunferência): ${comprimento.toFixed(2)}</p>
    <p style="color:green">Área (superfície da esfera): ${area.toFixed(2)}</p>
    <p style="color:green">Volume: ${volume.toFixed(2)}</p>
  `;
});
