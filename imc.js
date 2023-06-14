const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");

// Evento que coloca um "." depois que 1 digitos serem inseridos
inputAltura.addEventListener("keypress", () => {
  let inputLength = inputAltura.value.length;

  if (inputLength === 1) {
    inputAltura.value += ".";
  }
});
// Evento que coloca um "." depois que 2 digitos serem inseridos
inputPeso.addEventListener("keypress", () => {
  let inputLength = inputPeso.value.length;

  if (inputLength === 2) {
    inputPeso.value += ".";
  }
});
// Função para calcular o valor do IMC que será o resultado do peso dividido pela altura
function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").innerHTML =
      "Insira valores numéricos válidos.";
    return;
  }

  let imc = peso / (altura * altura);
  // document.getElementById("resultado").innerHTML =
  //   "Seu IMC é: " + imc.toFixed(2);

  if (imc <= 18.5) {
    document.getElementById("resultado").innerHTML =
      "Seu IMC é: " +
      imc.toFixed(2) +
      " <strong>Magreza</strong> <br>(grau 0 de obesidade)";
  } else if (imc <= 24.9) {
    document.getElementById("resultado").innerHTML =
      "Seu IMC é: " +
      imc.toFixed(2) +
      " <strong>Normal</strong> <br>(grau 0 de obesidade)";
  } else if (imc <= 29.9) {
    document.getElementById("resultado").innerHTML =
      "Seu IMC é: " +
      imc.toFixed(2) +
      " <strong>Sobrepeso</strong> <br>(grau 1 de obesidade)";
  } else if (imc <= 39.9) {
    document.getElementById("resultado").innerHTML =
      "Seu IMC é: " +
      imc.toFixed(2) +
      " <strong>Obesidade</strong> <br>(grau 2 de obesidade)";
  } else if (imc >= 40.0) {
    document.getElementById("resultado").innerHTML =
      "Seu IMC é: " +
      imc.toFixed(2) +
      " <strong>Obesidade grave</strong> <br>(grau 3 de obesidade)";
  } else {
    document.getElementById("resultado").innerHTML =
      "Insira valores numéricos diferente de 0.";
  }
}
// Função para limpar os inputs
function limpar() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").innerHTML = "";
}
