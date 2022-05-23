function ValidarNota (){
    var nota1 = parseInt(document.getElementById("matematica").value);
    var nota2 = parseInt(document.getElementById("lengua").value);
    var nota3 = parseInt(document.getElementById("EFSI").value);

    if(nota1 > 10 || nota1 < 1){
        alert('Error, usted debe colocar en matemática un valor mayor a 1 y menor que 10');
        document.getElementById("matematica").style.color="red";

    }
    else if(nota2 > 10 || nota2 < 1){
        alert('Error, usted debe colocar en lengua un valor mayor a 1 y menor que 10');
        document.getElementById("lengua").style.color="red";

    }
    else if(nota3 > 10 || nota2 < 1){
        alert('Error, usted debe colocar en EFSI un valor mayor a 1 y menor que 10');
        document.getElementById("EFSI").style.color="red";

    }
    else{
        document.getElementById("matematica").style.color="green";
        document.getElementById("lengua").style.color="green";
        document.getElementById("EFSI").style.color="green";
    }
}

function Promedio (){
    var nota1 = parseInt(document.getElementById("matematica").value);
    var nota2 = parseInt(document.getElementById("lengua").value);
    var nota3 = parseInt(document.getElementById("EFSI").value);
    let num = (nota1 + nota2 + nota3) / 3;

    document.getElementById("Promedio").innerHTML=num;

    if(num >= 6){
        document.getElementById("Promedio").style.color="green";
    }else{
        document.getElementById("Promedio").style.color="red";
    }
}

function MayorNota(){
    var nota1 = parseInt(document.getElementById("matematica").value);
    var nota2 = parseInt(document.getElementById("lengua").value);
    var nota3 = parseInt(document.getElementById("EFSI").value);

    if(nota1 > nota2 && nota1 > nota3){
        document.getElementById("MayorNota").innerHTML="Matematica"
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(nota2 > nota1 && nota2 > nota3){
        document.getElementById("MayorNota").innerHTML="Lengua"
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(nota3 > nota1 && nota3 > nota2){
        document.getElementById("MayorNota").innerHTML="EFSI"
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(nota1 && nota2 > nota3 && nota1 == nota2){
        document.getElementById("MayorNota").innerHTML="Matematica y Lengua"
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(nota1 && nota3 > nota2 && nota1 == nota3){
        document.getElementById("MayorNota").innerHTML="Matematica y EFSI"
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(nota2 && nota3 > nota1 && nota2 == nota3){
        document.getElementById("MayorNota").innerHTML="Lengua y EFSI"
        document.getElementById("MayorNota").style.color="blue";
    }
    else{
        document.getElementById("MayorNota").innerHTML="Matematica, Lengua y EFSI"
        document.getElementById("MayorNota").style.color="blue";

    } 
}