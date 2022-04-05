// de la lista 11,33,2, -1, 110, 99, 8 obtener el segundo mayor impar
const numeros = [11, 33, 2, -1, 110, 99, 8];
let impares = []; 

for (let i = 0; i < numeros.length; i++){
    const element = numeros [i];
    
    if (element % 2 !== 0 ){
        impares.push(element); // El push sirve para agregar algo a la lista
    }
            impares.sort(function (a, b){ //function sort2(a,b){return b-a;} const results = data.filter(x => x%2 ! == 0).sort(sort2);
                // el sort compára elemento por elemento y le doy los valores poniendo impares.
                if (a < b){
                    return 1;
                }
                if (a > b){
                    return -1;
                }
                // A es igual a B|
                return 0;
        }); //el parentesis es de la funcion sort
      
}
console.log(impares[1]);