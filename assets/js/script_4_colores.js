function pintar () {
    var ele = event.target;
    ele.style.backgroundColor = 'black'

}


var ele = document.querySelector('#azul')
ele.addEventListener ("click", pintar);

var ele = document.querySelector('#rojo')
ele.addEventListener ("click", pintar);

var ele = document.querySelector('#verde')
ele.addEventListener ("click", pintar);

var ele = document.querySelector('#amarillo')
ele.addEventListener ("click", pintar);


