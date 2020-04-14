// ATIVIDADE (AULA03): DATA //

var dt = prompt("Digite uma data", "Exemplo: dd/mm/aaaa");

if (dt.length < 10 || dt.length > 10) {
  alert("Digite a data corretamente");
} else {
  var dia = dt.substring(0, 2);
  var mes = dt.substring(3, 5);
  var ano = dt.substring(6, 10);
  console.log(mes);

  switch (mes) {
    case "01":
      mes = "Janeiro";
      break;
    case "02":
      mes = "Fevereiro";
      break;
    case "03":
      mes = "Março";
      break;
    case "04":
      mes = "Abril";
      break;
    case "05":
      mes = "Maio";
      break;
    case "06":
      mes = "Junho";
      break;
    case "07":
      mes = "Julho";
      break;
    case "08":
      mes = "Agosto";
      break;
    case "09":
      mes = "Setembro";
      break;
    case "10":
      mes = "Outubro";
      break;
    case "11":
      mes = "Novembro";
      break;
    case "12":
      mes = "Dezembro";
      break;

    default:
      mes = "Inexistente";
      break;
  }
  alert("Você colocou a data de " + dia + " de " + mes + " de " + ano);
}

