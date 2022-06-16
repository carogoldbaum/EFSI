//Dado un array, multiplicar (duplicarlo) todos sus valores por el que se encuentra en la posición anterior, 
//menos el siguiente, sin modificar el array original
//Averiguar como poner 0 en la posicio -1 y 12, para que no de NaN

const numeros = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
let multiplicacion;
let siguiente;
let anterior;

for (let i = 0; i < numeros.length; i++){
   
    let element = numeros[i];
    if (i == 0){
        anterior = 0;
    } 
    else{
        anterior = numeros[i -1];
    }
    if(i == numeros.length -1){
        siguiente = 0;
    }
    else{
        siguiente = numeros[i +1];
    }

    multiplicacion = (element * anterior) - siguiente;
    console.log (multiplicacion);
}

//(true/false) ? TRUE : FALSE;
//si lo que esta en el lugar de true es verdaderO, devuelve verdadero, lo mismo para false

// 5 === "5", compara el tipo de dato y su valor
// 5 == "5", compara el valor