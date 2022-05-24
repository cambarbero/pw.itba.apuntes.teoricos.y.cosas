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