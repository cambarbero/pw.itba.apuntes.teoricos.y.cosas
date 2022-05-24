console.log("soy externo")

// para acceder a un ID
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)

// para acceder a una clase
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)

// para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p") //si quiero seleccionar todo lo de una etiqueta
console.log(parrafo3)

function cambiarTitular(){ 
let titular1 = document.getElementById('titular')
titular1.innerText = "Otra cosa"
}

// el javascript esta modificando el valor interno de un modo que se encuentra en html

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = "<h2> BU !!! </h2> "
    contenedor.className = "titularSecundario" // al h2 le asigne una clase para identificarlo
    let texto = "<h3> Hola soy un h3 </h3>"
    contenedor.append(texto) // tambien se va a mostrar el 'hola' al igual que el BU !!!, SIRVE COMO OTRA MANERA ADEMAS DEL contenedor.innerhtml
} // al apretar el boton "revelar informacion", aparece 'BU !!!', y desaparece el boton

function borrarPais(){
    let paises = document.getElementsByClassName("paises")
    paises[0].remove()
    console.log(paises)
} // entonces ahora cuando tocas el boton 'borrar pais' que se encuentra en el html, se va a borrar el primer
// elemento de la lista, y si lo tocas de nuevo, se va a volver a borrar el primer elemento de la lista ya modificada

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario)+1)) //parseint te pasa el string de edad a un numero asi en vez de que quede 191, queda 20
    let chequeado = document.getElementById('bases').checked
    if(chequeado != true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    // ECMASCRIPT 6: la nueva escritura del javascript
    // template literal
    // back tick ````
    document.body.append(`El nombre de usuario es ${nombreUsuario} y va a cumplir ${sumar(pasteInt(edadUsuario))}`)
}

// query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)
let seleccionarUno = document.querySelector("#titular")
console.log(seleccionarUno)
let seleccionarClase = document.querySelectorAll(".paises") //selecciona todos los paises por el SelectorAll, si queres uno solo es Selector
console.log(seleccionarClase)

/*

1) Crear una web nueva con la estructura basica

2) Enlazarla a JavaScript

3) Crear un formulario de registro

4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede registrar

5) Obligar al usuario a estar de acuerdo con terminos y condiciones

6) Mostrarle al usuarios en un parrafo, los datos que ingreso

*/

