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
