const btnCrearLista = document.getElementById("crearLista")
const contenedorListas = document.getElementById("contenedorListas")

let numListas = 1

function crearLista() {
    btnCrearLista.addEventListener("click", () => {
       
        let lista = 
        `<div id=contenedorLista${numListas} class="contenedoresListas">
        <div class="titulosListas"><input type="text" value="Ingrese el titulo" class="tituloLista"></div>
        <ol id=lista${numListas} > 
        </ol>
        <div class="contenedorAgregarEliminar"><button id="${numListas}" class="btnAgregarItem">Agregar item</button><button id="eliminarLista${numListas}" class="btnsEliminarLista">Eliminar lista</button></div>
        </div>`
        contenedorListas.innerHTML += lista
        agregarItem(numListas)
        eliminarLista()
        numListas++
    })

}

crearLista()


function agregarItem(numLista) {
    const btnsAgregarItem = document.getElementsByClassName("btnAgregarItem")
    let liNum = 1
    for (const btnAgregar of btnsAgregarItem) {
        btnAgregar.addEventListener("click", () => {
            const ol = document.getElementById("lista" + btnAgregar.id)
            let li = `<li class="tarea" id=li${numLista}${liNum}> <input type="text" id=input${numLista}${liNum} class="sinTachar" value="Agregar tarea" ><button id="eliminar${numLista}${liNum}" class="eliminarTarea">X</button></li>`
            ol.innerHTML += li
            marcarTarea()
            eliminarTarea()
            liNum++
        })
    }

}

function marcarTarea() {
    const liTarea = document.getElementsByClassName("tarea")
    for (const tarea of liTarea) {
        tarea.addEventListener("dblclick", () => {
            let buscarId = tarea.id.slice(2)
            const inputTachar = document.getElementById("input" + buscarId)
            if (inputTachar.className == "sinTachar" ) {
                inputTachar.setAttribute("class", "tachar")
            }
            else{
                inputTachar.setAttribute("class", "sinTachar")
            }
        })
    }
}

function eliminarTarea() {
    const btnsEliminarTarea = document.getElementsByClassName("eliminarTarea")
    for (const eliminarTarea of btnsEliminarTarea) {
        eliminarTarea.addEventListener("click", () => {
            let buscarId = eliminarTarea.id.slice(8)
            const liEliminar = document.getElementById("li" + buscarId)
            liEliminar.remove()
        })
    }
}

function eliminarLista() {
    const btnsEliminarLista = document.getElementsByClassName("btnsEliminarLista")
    for (const eliminarLista of btnsEliminarLista) {
        console.log(eliminarLista);
        eliminarLista.addEventListener("click", () => {
            let buscarId = eliminarLista.id.slice(13)
            console.log(buscarId);
            const listaEliminar = document.getElementById("contenedorLista" + buscarId)
            console.log(listaEliminar);
            listaEliminar.remove()
        })
    }
}



 