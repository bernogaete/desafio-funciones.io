// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);

// function pintar (color="green") {
//     let color = document.getElementById ('ele1')
//     color.style.backgroundColor = pintar
// }

// color.addEventListener ("click", function () {
//     color.style.backgroundColor = 'yellow'
// })

// pintar ("yellow")document


// pintar = function (color = "red") {
//     const hello = document.getElementById ('ele1')
//     hello.style.backgroundColor = color 
// }

// hello.addEventListener ("click", function () {
//     hello.style.backgroundColor = 'yellow'
// })

// pintar = function (color = "green") {
//     const elemento = document.getElementById ("ele1")
//     elemento.style.backgroundColor = color
// }
//  pintar () ;

//  elemento.addEventListener ("click", function() {
//     pintar (elemento.'yellow')
//  })



let elemento = document.getElementById ('ele1')

elemento.style.backgroundColor = "green"

function pintar () {
    elemento.style.backgroundColor = "yellow"
}

elemento.addEventListener ("click", pintar)


