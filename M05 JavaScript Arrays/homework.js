/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var numerofinal = array.map((numeromasuno) => { return numeromasuno + 1 })
   return numerofinal
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let verificaciondeelemento = array.includes(elemento);
   return verificaciondeelemento

}

function agregarNumeros(arrayOfNums) { // [1, 2, 5]
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i] //conserva tu valor actual y sumale este  (tamb seria suma = suma + arrayOfNums[i])
   };
   return suma
}

function promedioResultadosTest(resultadosTest) { //[1, 3, 5]
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   suma = 0
   for (var i = 0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i]
   }
   let promediofinal = suma / resultadosTest.length

   return promediofinal
}

function numeroMasGrande(arrayOfNums) {// [5, 5, 3]
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   // Creamos una variable para almacenar el número más grande, inicializada en el primer elemento del arreglo
   let numeroMasGrande = arrayOfNums[0];

   // Iteramos por todos los elementos del arreglo, empezando desde el segundo elemento
   for (let i = 1; i < arrayOfNums.length; i++) {
      // Comparamos el elemento actual con el número más grande encontrado hasta ahora
      if (arrayOfNums[i] > numeroMasGrande) {
         // Si el elemento actual es mayor, lo actualizamos como el número más grande
         numeroMasGrande = arrayOfNums[i];
      }
   }

   // Retornamos el número más grande encontrado
   return numeroMasGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código: [1,2,3,4]
   if (arguments.length === 0) { return 0 }
   if (arguments.length === 1) { return arguments[0] }

   var producto = 1

   for (var i = 0; i < arguments.length; i++) {
      producto = producto * arguments[i]
   }
   return producto
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayoresque18 = []
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) { mayoresque18.push(array[i]) }
   }
   return mayoresque18.length
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 7 || numeroDeDia === 1) { return "Es fin de semana" }
   else return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var num = num.toString()

   if (num.includes('9', 0)) { return true }
   else { return false }

   //otra manera seria return num.toString().startWith('9');
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var array1 = array[0]
   for (var i = 0; i < array.length; i++) {
      if (array[i] !== array1) { return false }
   }
   return true
}



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesDesordenados = [];

   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         mesesDesordenados.push(array[i]);
      }
   }

   if (mesesDesordenados.length === 3) {
      return mesesDesordenados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var tabla = [];

   for (var i = 0; i < 11; i++) {
      var operacion = 6 * i; tabla.push(operacion) // sin declarar operacion= tabla.push(i*6)

   }

   return tabla;

}



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var mayoracien = []

   for (var i = 0; i < 201; i++) {
      if (array[i] > 100) mayoracien.push(array[i])
   }

   return mayoracien

}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = []

   for (var i = 0; i < 10; i++) {
      num = num + 2; if (num === i) { break; } else { array.push(num); }
   }
   if (array.length < 10) { return "Se interrumpió la ejecución"; }
   else if (array.length === 10) { return array; }

}
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = []
   for (var i = 0; i < 10; i++) {
      if (i === 5) { continue; }; num = num + 2; array.push(num);
   //dependiendo la funcion las instrucciones del bucle tendra un orden determinado
   // aca primero se tiene que comprobar que cuando el numero llegue a 5 se omita y continue con la proxima iteracion.
   }

   return array
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
