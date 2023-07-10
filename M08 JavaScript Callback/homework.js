/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   var priemraLetra = nombre.charAt(0).toUpperCase(); //Utilizamos el método charAt(0) para obtener el primer carácter del texto.
   var restoDeLaPalabra = nombre.slice(1);          //Luego, aplicamos el método toUpperCase() a la primera letra para convertirla en mayúscula.
   return priemraLetra + restoDeLaPalabra;           //Usamos el método slice(1) para obtener el resto del texto, excluyendo la primera letra. 
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);

}
//[2, 9, 3, 5, 7]
function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   let resultadoSuma = 0
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      resultadoSuma = arrayOfNumbers[i] + resultadoSuma; // resultadoSuma += arrayOfNumbers[i]
   }
   cb(resultadoSuma);
}
//[2, 9, 3, 5, 7]
function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
   }

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   let nuevoArreglo = []
   for (let i = 0; i < array.length; i++) {
      cb(array[i]); nuevoArreglo.push(cb(array[i]));
   }
   return nuevoArreglo
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let comienzaConA = []
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === "a") { comienzaConA.push(arrayOfStrings[i]) }
   };
   return comienzaConA
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
