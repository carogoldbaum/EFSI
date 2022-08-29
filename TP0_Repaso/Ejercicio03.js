//Duplicar (cancat()), si tiene 10 que ahora tiene 20, el array del Ejercicio02 
// y aplicarle la funcion raiz a todos los elementos, obteniendo como resultado [{original:9, modificado:3}]

const numeros = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
const numeros2 = numeros.concat(numeros);

let raiz = numeros2.map(function(numeros2) {
    return Math.sqrt(numeros2);
});

for (let i = 0; i < numeros2.length; i++){
    console.log(`Original: ${numeros2[i]} Modificado: ${raiz[i]}`);
 }

 //Elminar respuestas que digan NaN y solo mostrar 2 decimales
 let numeros = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
 numeros = numeros.filter (a => a >= 0);
 const numeros2 = numeros.concat(numeros);

let raiz = numeros2.map(function(numeros2) {
    return Math.sqrt(numeros2);
 });

for (let i = 0; i < numeros2.length; i++){   
    console.log(`Original: ${numeros2[i]} Modificado: ${raiz[i].toFixed([2])}`);
 }