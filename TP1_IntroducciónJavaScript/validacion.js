function ValidarNota (){

    console.log("hola mundo")

    var ConseguirNota = parseInt(document.getElementById("matematica").value);
    var ConseguirNota2 = parseInt(document.getElementById("lengua").value);
    var ConseguirNota3 = parseInt(document.getElementById("EFSI").value);

    if(ConseguirNota > 10 || ConseguirNota < 1){

        alert('error');

    }
    else{

        alert('Nota validada');

    }

    if(ConseguirNota2 > 10 || ConseguirNota2 < 1){

        alert('error');

    }
    else{

        alert('Nota validada');

    }

    if(ConseguirNota3 > 10 || ConseguirNota3 < 1){

        alert('error');

    }
    else{

        alert('Nota validada');

    }
}

function Promedio (nota1, nota2, nota3){
    let num = (nota1 + nota2 + nota3) / 3;
    return num;
}