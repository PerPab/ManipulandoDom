


var numeroNodo = 1

function Agregar() {
    var elemento = document.querySelector('#lista')
    var input = document.getElementById("input").value

    if (input.trim() != "") {

        var contenido = `
            <li class="item-list" id="${numeroNodo}">
            <p class="contenido-texto">${input}</p><button id="${numeroNodo}" 
            class="btn-eliminar" 
            onclick="Eliminar()"
            >Eliminar</button>
            </li>
            `
        numeroNodo++
        elemento.innerHTML += contenido
        document.getElementById("input").value = ""

    }





}

function Eliminar() {
    var id = event.target.id
    var nodo = document.getElementById(id)
    nodo.remove()

}


