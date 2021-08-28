var arreglo = [1, 'cadena de texto', [1, 2, 3, 'Cadena', ['hola', 5, true]], true, false];

function promedio(calificaciones) {
    console.log(calificaciones);
    /* console.log(calificaciones.length); */
    console.log(calificaciones[3])


}

promedio([70, 80, 100, 50]);
promedio([70, 80, 100, 60, 10]);
promedio([70, 80, 100, 60, 10, 100]);


console.log('ForOF');
for (var elemento of arreglo) {
    console.log(elemento);
}


console.log(arreglo)
console.log('ForEach');

var concatenacion='';

arreglo.forEach(function (elemento,indice) {
    if(indice==2){
        console.log('El indice 2 contiene: '+ elemento);
    }else{
        console.log(elemento);
    }
    concatenacion=concatenacion+elemento;
});

console.log(concatenacion);