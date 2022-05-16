function ValidarNota (notax){

    var num = notax;

    if(num > 10 || num < 1){

        alert('error');

    }
    else{

        alert('Nota validada');

    }

}

var ConseguirNota = document.getElementById("matematica").value;
var ConseguirNota = document.getElementById("lengua").value;
var ConseguirNota = document.getElementById("EFSI").value;

var MostrarNota = document.getElementById("valoracion1").value;
var MostrarNota = document.getElementById("valoracion2").value;
var MostrarNota = document.getElementById("valoracion3").value;

