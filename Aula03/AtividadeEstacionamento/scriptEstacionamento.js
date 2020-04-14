// ATIVIDADE (AULA03): ESTACIONAMENTO //

function cobranca() {
  var veiculo = prompt("Digite o seu veiculo: carro, ônibus ou caminhão");

  var tempo = prompt(
    "Digite quanto tempo seu veiculo ficou estacionado. Dê o valor arredondado em horas"
  );

  if (veiculo == "carro") {
    alert("Você deve pagar: R$" + tempo * 2);
  } else if (veiculo == "onibus") {
    alert("Você deve pagar: R$" + tempo * 3);
  } else {
    alert("Você deve pagar: R$" + tempo * 4);
  }
}
