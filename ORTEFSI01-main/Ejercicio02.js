//Dado un array, multiplicar todos sus valores por el que se encuentra en la posición anterior, 
//menos el siguiente, sin modificar el array original

const numeros = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
let multiplicacion;

for (let i = 0; i < numeros.length; i++){
    if(i == 0 || 12){
     numeros.push(0);
    }
    const element = numeros [i];
    if (i == 0){
        anterior = 0;
    } 
    else {
    const anterior = numeros [i-1];
    }
    if (i == numeros.length){
        const siguiente = numeros [i+1];
    }
    multiplicacion = (element * anterior) - siguiente;
    console.log (multiplicacion);
}

//Averiguar como poner 0 en la posicio -1 y 12, para que no de NaN