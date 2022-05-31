console.log('Hola')
widnow.onload = document.getElementById('nombreIngresado').value = localStorage.getItem('nameUser')

function guardarData(){
    let value = document.getElementById("nombreIngresado").value
    console.log(valueIngresado)

    localStorage.setItem('nameUser', value)
}

function borrarData(){
    localStorage.clear()
}

function borrarunDato(){
    localStorage.removeItem('nameUser')
}

let profesor = { // esto es un objeto

    nombre: 'esteban',
    edad: 29,
    trabajando: true,

}

let alumnos = [ //esto es un array de objetos
    {nombre:"", estado:'', estado:"cursando", notaFinal:1},
    {nombre:'', estado:'', notaFinal},
    {nombre:"", estado:'', estado:"cursando", notaFinal:1}
]

profesorJSON = JSON .stringify(profesor)
console.log(profesor)
console.log(prfoesorJSON)
console.log(profesor.nombre)
console.log(alumnos)
console.log(alumnos[0])

let objetoMarcos= {'nombre':'marcos', 'estado':'en proceso'}

