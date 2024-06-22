const elemento = document.querySelector ('#key')
const body = document.querySelector ('body')
// EJERCICIO KEYDOWN

// 1.- VARIABLE GLOBAL

document.addEventListener ("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        // elemento.style.backgroundColor = 'pink'
        agregarElementoPink ();
    } else if (event.key === "s" || event.key === "S") {
        agregarElementoOrange (); 
    } else if (event.key === "d" || event.key === "D") {
        agregarElementoSkyblue ();}


        
})

function agregarElementoPink () {
elemento.style.backgroundColor = 'pink'
 }

 function agregarElementoOrange () {
    elemento.style.backgroundColor = 'orange'
     }

 function agregarElementoSkyblue () {
        elemento.style.backgroundColor = 'skyblue'
         }

// 2.- CREAR NUEVOS ELEMENTOS

document.addEventListener ("keydown", function (newdiv) {

    if (newdiv.key === "q" || newdiv.key === "Q") {
        // elemento.style.backgroundColor = 'pink'
        agregarNuevoDivPurple ();
    } else if (newdiv.key === "w" || newdiv.key === "W") {
        agregarNuevoDivGrey (); 
    } else if (newdiv.key === "e" || newdiv.key === "E") {
        agregarNuevoDivBrown ();}


        
})

function agregarNuevoDivPurple () {
    nuevoElementoDiv = document.getElementById('key')
    nuevoElementoDiv = document.createElement ("div");
    nuevoElementoDiv.style.height = '200px'
    nuevoElementoDiv.style.width = '200px'
    nuevoElementoDiv.style.border = '5px solid black'
    nuevoElementoDiv.style.backgroundColor = "purple"
    body.appendChild (nuevoElementoDiv)
}

function agregarNuevoDivGrey () {
    nuevoElementoDiv = document.getElementById('key')
    nuevoElementoDiv = document.createElement ("div");
    nuevoElementoDiv.style.height = '200px'
    nuevoElementoDiv.style.width = '200px'
    nuevoElementoDiv.style.border = '5px solid black'
    nuevoElementoDiv.style.backgroundColor = "grey"
    body.appendChild (nuevoElementoDiv)
}

function agregarNuevoDivBrown () {
    nuevoElementoDiv = document.getElementById('key')
    nuevoElementoDiv = document.createElement ("div");
    nuevoElementoDiv.style.height = '200px'
    nuevoElementoDiv.style.width = '200px'
    nuevoElementoDiv.style.border = '5px solid black'
    nuevoElementoDiv.style.backgroundColor = "brown"
    body.appendChild (nuevoElementoDiv)
}
