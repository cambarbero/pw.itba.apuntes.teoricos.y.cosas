// funcion: conjunto de instrucciones que se agrupan para realizar una tarea

// las puedad declarar (crearlas) o invocarlas (utilizarlas)

// declarar permite juntar todas estas acciones a una linea de codigo o poca linea de codigo,
// de esta manera no se tendran que escribir todas las instrucciones cada vez
// que se quiera realizar la accion.

// principio KISS --> llevar las tareas a lo minimo que se pueda hacer, 'keep it simple'
// principio YAGNI --> vas creando la funcion a medida que la necesitas. 
// cuando no la necesito, no la creo. asi no tengo codigo de mas

function saludar(){ // estas declarando la funcion
    console.log("Hola, estudiante")
}

// invoco la funcion:
saludar()

// la estructura de una funcion va asi:

// function nombre (){ instrucciones }
// el nombre de la funcion es unico para cada funcion

// -------------

// paramentro: es un valor que va a ingresar el usuario
function siguiente(){
console.log(numero+1)
}

// si el usuario escribe 1, le va a devolver 2

siguiente(1)

function saludarConParametro(nombre){
    console.log("Hola " + nombre)
}

saludarConParametro("Camilo") // te devuelve "hola camilo"

// ---------------

function sumarDos (numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

function mostrar(visible){
console.log(visible)
}

mostrar( sumarDos(1,2) ) // esto va a mostrar el numero 3

function calculadora (numero1, numero2, operaicon){
    if(operacion === "+"){
        return numero1 + numero2
    }
    else if(operacion === "-"){
        return numero1 - numero2
    }
    else if(operacion === "*"){
        return numero1 * numero2
    }
    else if(operacion === "/"){
        if(numero2 !== 0){
            return numero1 / numero2
        }
        else{
            return "No se puede dividir por cero"
        }
    }
    else{
        return "Ingrese una opreacion valida"
    }
}

mostrar(calculadora(1, 2, "+"))

// -----------------

// SCOPE --> ambito en el que habitan las variables

let variableNombre = "Camilo" // variable GLOBAL o universal
// esta la podes usar en cualquier funcion porque no esta dentro
// de ninguna en primer lugar

function nuevoAmbito(){
    let edad = 19
    let variableNueva; // se puede crear una variable local con el mismo nombre que en otra funcion
    return edad
}
// aca definis una variable LOCAL osea que solo sirve para esa funcion de
// nuevoAmbito

function saludarALaVariable(){
    return "Hola " + variableNombre + " " + nuevoAmbito()
    let variableNueva;
}

mostrar(saludarALaVariable())


// funciones declaradas (las que estuvimos escribiendo todo este tiempo)

// funciones anonimas o expresadas (habitan adentro de una variable)
// ej
let suma = function (a,b){
    return a + b
}

let resta = function(a, b ){
    return a - b
}

mostrar(resta(2,1))

// Funcion flecha (similar a las funciones expresadas pero con la sintaxtis mas acotada)

let multiplicar = (a,b) => a*b
mostrar(multiplicar(2,2))

// EJERCICIOS DE FUNCIONES
/* Una funcion que: 

-Calcular costo total de productos y/o servicios seleccionados por el usuario.

-Calcular pagos en cuotas sobre un monto determinado.

-Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

-Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.

-Calcular edad promedio de personas registradas.

-Calcular nota final de alumnos ingresados. 

-Nos indique si el numero es par o impar

*/

function calcularCostos (eleccion1, eleccion2, eleccion3){
let costoTotal;
servicio1 = 1000
servicio2 = 2000
servicio3 = 3000
if(producto1 == "limpieza de cutis" || eleccion2 == "limpieza de cutis" || eleccion3 == "limpieza de cutis"){
    costoTotal = costoTotal + servicio1;
}
if(producto1 == "uñas esculpidas" || eleccion2 == "uñas esculpidas" || eleccion3 == "uñas esculpidas"){
    costoTotal = costoTotal + servicio2;
}
if(producto1 == "uñas encarnadas" || eleccion2 == "uñas encarnadas" || eleccion3 == "uñas encarnadas"){
    costoTotal = costoTotal + servicio3;
}
console.log(costoTotal)
return costoTotal
}

mostrar(calcularCostos("limpieza de cutis", "uñas esculpidas", "uñas encarnadas"))


// variable: un espacio en memoria

let nombre = "Esteban";
let edad = 29;
let cargo = "profesor"

let profesor = ["Esteban",29,"profesor", true] // esto es un array (o lista como vimos en python)
//                  0      1    2         3       cantidad de elementos: n-1  , los array empeizan en 0
console.log(profesor)
console.log(profesor[0]) // va a mostrar 'Esteban"

for(let i = 0; i < 4; i++){         // i++ es lo mismo que decir i = i + 1 y asi se va acumulando
    console.log(profesor[i])
}

// yo puedo acceder a las propeidades de los arrays

// propiedades:
// largo --> 
for(let i = 0; i < profesor.length; i++){             // profesor.length significa el largo del array
    console.log(profesor[i])
}

for(let i = 0; i < 4; i++){         
    profesor[i] = profesor[i] + 1
}

// Metodos que me permiten cambiar mi array
// Push:


profesor.push("El mejor") // agrega un elemento al final del array
console.log(profesor)

profesor.unshift("Hola") // agrega un elemento al principio del array
console.log(profesor)

let ultimo = profesor.pop() // guardas el ultimo elemento del array adentro de esta variable llamada "ultimo"
console.log(ultimo)

let primero = profesor.shift() // guardas el primer elemento del array adentro de esta variable llamada "primero"
console.log(ultimo)

console.table(profesor) // transforma un array en tabla

// splice (splice mdm) documentacion de javascript

profesor.splice(indice, )

profesor.splice(1, 1) // 
console.log(profesor)

profesor.splice(profesor.length/2 , 1) // saca el elemento del array que este en el medio

let mitad = profesor.splice(profesor.length/2, profesor.length)
console.log(mitad)

let equipo = ["esteban", "dani", "nicky", "guille"]
console.log(equipo)
let frase = equipo.join('mulea a') // agrega al array "mule a"
console.log(frase)

let perros = ["firulais", "odin"]
let gatos = ["dona, 'michi"]

let mascotas = perros.concat(gatos) // junta los dos arrays uno despues del otro respectivamente
console.log(mascotas)

let letras = ["a", "b", "c", "d", "e"]
let nuevo = letras.slice(letras.length/2, letras.length) // los corta y cuando el array es impar redondea hacia abajo
console.log(letras)
console.log(nuevo)
console.long(letras.reversed()) // invierte el orden del array

if (letras.includes("a")){ // te dice si algo o no esta en el array
    console.log("la letra esta en un array")
}

console.log(letras.indexOf('a')) // te devuelve en que indice esta el elemento del array
console.log(letras.indexOf('f')) // si el elemento no esta en el array te va a devolver el valor -1


