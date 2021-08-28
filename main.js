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

var concatenacion = '';

function miFuncion(auto, index) {
    if (index == 2) {
        console.log('El indice 2 contiene: ' + auto);
    } else {
        console.log(auto, index);
    }
    concatenacion = concatenacion + auto;
}

arreglo.forEach(miFuncion);

/* arreglo.forEach(function (auto, index) {
    if (index == 2) {
        console.log('El indice 2 contiene: ' + auto);
    } else {
        console.log(auto);
    }
    concatenacion = concatenacion + auto;
});  */

/* console.log(concatenacion); */

//Sort

var nums = [1, 2, 3, 4, 5, 10, 20, 30, 100, 1000, 200, 60000];

nums.sort(function (primerElemento, segundoElemento) {
    //Algoritmo que evalue los elementos.
    return segundoElemento - primerElemento;
});

//Filter
function impares(numero) {
    /* if (numero % 2 !== 0) {
        return true;
    } else {
        return false;
    } */

    return numero % 2 !== 0;
}
var numerosImpares = nums.filter(impares);

console.log(numerosImpares);

//map
var nombres = ['ramón', 'pedro', 'laura', 'maría']
console.log(nombres);

var nombresMayus = nombres.map(function (nombre, indice) {
    if (nombre === 'maría') {
        return nombre;
    }
    if (indice === 1) {
        return indice;
    }
    return nombre.toUpperCase();
})

console.log(nombresMayus);