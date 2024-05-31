function calcularImc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);


    if (imc) {
        var mensaje = "Tu IMC es: " + imc.toFixed(2) + (" ");
        if (imc < 18.5) {
          mensaje += "Estás bajo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
          mensaje += "Tienes un peso normal";
        } else if (imc >= 24.9 && imc < 29.9) {
          mensaje += "Tienes sobrepeso";
        } else {
          mensaje += "Tienes obesidad";
        }
        alert(mensaje);
      } 
    }