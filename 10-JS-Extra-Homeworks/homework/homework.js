// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    const arreglo = [];
    for (const prop in objeto) {
        arreglo.push([prop, objeto[prop]]);
    }
    return arreglo;
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    /*
    let conteo = {};
    string.replace(/\S/g, function(l) {
        conteo[l] = isNaN(conteo[l]) ? 1 : conteo[l] + 1;
    });
    return conteo;
    */
    const cadena = string.split('');
    const objeto = {};
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        contador = 0;
        for (let j = 0; j < cadena.length; j++) {
            if (cadena[i] === cadena[j]) {
                contador += 1;
                objeto[cadena[i]] = contador;
            }
        }
    }
    return objeto;

}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    /*const result = [...s].sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0).join('');
    return result;*/
    let strmin = '';
    let strmay = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            strmay += s[i];
        } else {
            strmin += s[i];
        }
    }
    return strmay + strmin;
}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    let arregloStr = str.split(' ');
    let invertidas = arregloStr.map(function(element) {
        return element.split('').reverse().join('');
    });
    return invertidas.join(' ');
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    if (numero.toString().length > 1) {
        return numero.toString() === numero.toString().split('').reverse().join('') ? 'Es capicua' : 'No es capicua';
    }
    return false;
}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí

    let resultado = cadena.replace(/[abc]/g, '');
    return resultado;
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    arr.sort(function(a, b) {
        return a.length - b.length;
    });
    return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    /*let resultado = [];
    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j]) {
                resultado.push(arreglo1[i]);
            }
        }
    }
    return resultado;*/
    let ar1 = arreglo1.filter(e => arreglo2.includes(e));

    return [...ar1];
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};