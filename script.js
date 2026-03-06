function calcularAliquotaEfetiva(salario, imposto) {
  return (imposto / salario) * 100;
}

function faixaIsento(s) { return 0; }
function faixa7_5(s) { return (s * 0.075) - 169.44; }
function faixa15(s) { return (s * 0.15) - 381.44; }
function faixa22_5(s) { return (s * 0.225) - 662.77; }
function faixa27_5(s) { return (s * 0.275) - 896.00; }

function calcularImposto(salario) {
  let imposto;
  if (salario <= 2259.20) imposto = faixaIsento(salario);
  else if (salario <= 2826.65) imposto = faixa7_5(salario);
  else if (salario <= 3751.05) imposto = faixa15(salario);
  else if (salario <= 4664.68) imposto = faixa22_5(salario);
  else imposto = faixa27_5(salario);
  return imposto > 0 ? imposto : 0;
}

function exibirResultado() {
  let salario = parseFloat(document.getElementById("salario").value);
  let saida = document.getElementById("resultado");

  if (isNaN(salario) || salario <= 0) {
    saida.innerHTML = "Digite um salário válido!";
    return;
  }

  let imposto = calcularImposto(salario);
  let efetiva = calcularAliquotaEfetiva(salario, imposto);

 saida.innerHTML =
`IRPF: R$ ${imposto.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
Alíquota efetiva: ${efetiva.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`;
}


function limpar() {
  document.getElementById("salario").value = "";
  document.getElementById("resultado").innerHTML = "";
}

document.getElementById("btnCalcular").addEventListener("click", exibirResultado);
document.getElementById("btnLimpar").addEventListener("click", limpar);