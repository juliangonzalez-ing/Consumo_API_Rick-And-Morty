let personajes = fetch("https://rickandmortyapi.com/api/character")
let listado = document.getElementById("contenido_API")
let numero_pagina = 1

personajes.then(Personaje_API => Personaje_API.json())
    .then(Mirar_Personaje => {

        for (const imprimir of Mirar_Personaje.results) {

            listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
            <img src="${imprimir.image}" class="card-img-top" alt="imagen-personaje">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${imprimir.name}</h5>
                    <p class="card-text text-center">Especie: ${imprimir.species}</p>
                    <p class="card-text text-center">Status: ${imprimir.status}</p>
                    <p class="card-text text-center">Genero: ${imprimir.gender}</p>
                    <p class="card-text text-center">Ubicación: ${imprimir.location.name}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
        }
    }).catch(error => console.log(error))

/*    style="width: 11rem;" */



function PaginaUP() {
    numero_pagina++
    let listado = document.getElementById("contenido_API")
    listado.innerHTML = ''
    let pagina_api = "https://rickandmortyapi.com/api/character/?page=" + numero_pagina
    let valida_Api = fetch(pagina_api)
    valida_Api.then(validacion => validacion.json())
        .then(secuencia => {
            console.log(secuencia)
            for (const imprimir_pagina of secuencia.results) {
                listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
            <img src="${imprimir_pagina.image}" class="card-img-top" alt="imagen-personaje">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${imprimir_pagina.name}</h5>
                    <p class="card-text text-center">Especie: ${imprimir_pagina.species}</p>
                    <p class="card-text text-center">Status: ${imprimir_pagina.status}</p>
                    <p class="card-text text-center">Genero: ${imprimir_pagina.gender}</p>
                    <p class="card-text text-center">Ubicación: ${imprimir_pagina.location.name}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
            }
        }).catch(error => console.log(error))

}

function PaginaDown() {
    numero_pagina--
    if (numero_pagina == 0) {
        numero_pagina = 1
    } else {
        let listado = document.getElementById("contenido_API")
        listado.innerHTML = ''
        let pagina_api = "https://rickandmortyapi.com/api/character/?page=" + numero_pagina
        let valida_Api = fetch(pagina_api)
        valida_Api.then(validacion => validacion.json())
            .then(secuencia => {
                console.log(secuencia)
                for (const imprimir_pagina of secuencia.results) {
                    listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
            <img src="${imprimir_pagina.image}" class="card-img-top" alt="imagen-personaje">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${imprimir_pagina.name}</h5>
                    <p class="card-text text-center">Especie: ${imprimir_pagina.species}</p>
                    <p class="card-text text-center">Status: ${imprimir_pagina.status}</p>
                    <p class="card-text text-center">Genero: ${imprimir_pagina.gender}</p>
                    <p class="card-text text-center">Ubicación: ${imprimir_pagina.location.name}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
                }
            }).catch(error => console.log(error))
    }
}

function busqueda() {
    let listado = document.getElementById("contenido_API")
    listado.innerHTML = ''
    let valor_busqueda = document.getElementById("parametro_busqueda").value
    let busqueda_nombre = "https://rickandmortyapi.com/api/character/?name=" + valor_busqueda
    let Busqueda_API = fetch(busqueda_nombre)

    Busqueda_API.then(busquepersonaje => busquepersonaje.json())
        .then(resBusqueda => {
            console.log(resBusqueda)

            for (const imprimir_Busqueda of resBusqueda.results) {
                listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
            <img src="${imprimir_Busqueda.image}" class="card-img-top" alt="imagen-personaje">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${imprimir_Busqueda.name}</h5>
                    <p class="card-text text-center">Especie: ${imprimir_Busqueda.species}</p>
                    <p class="card-text text-center">Status: ${imprimir_Busqueda.status}</p>
                    <p class="card-text text-center">Genero: ${imprimir_Busqueda.gender}</p>
                    <p class="card-text text-center">Ubicación: ${imprimir_Busqueda.location.name}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
            }
        }).catch(error => console.log(error))
}


function Episodios() {
    let listado = document.getElementById("contenido_API")
    listado.innerHTML = ''
    let episodios_Api = "https://rickandmortyapi.com/api/episode"
    let valida_episodio = fetch(episodios_Api)
    valida_episodio.then(episodio => episodio.json())
        .then(resEpisodio => {
            console.log(resEpisodio)
            for (const Ver_Episodio of resEpisodio.results) {
                listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${Ver_Episodio.name}</h5>
                    <p class="card-text text-center">Emitido: ${Ver_Episodio.air_date}</p>
                    <p class="card-text text-center">Numero Episodio: ${Ver_Episodio.episode}</p>
                    <p class="card-text text-center">Creado: ${Ver_Episodio.created}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
            }
        }).catch(error => console.log(error))
}

function pagina_API(pagina) {
    localStorage.setItem("Pagina_Actual", pagina)
    let listado = document.getElementById("contenido_API")
    listado.innerHTML = ''
    let api_direccion="https://rickandmortyapi.com/api/character"
    let data_API = api_direccion + "?page=" + pagina
    console.log(data_API)

    let ejecutar = fetch(data_API)
    ejecutar.then(Paginacion_API => Paginacion_API.json())
        .then(Mirar_Paginacion => {

            for (const imprimir_paginacion of Mirar_Paginacion.results) {

                listado.innerHTML += `             
            <div class="col-4 mt-4 p-4">
            <div class= "card-deck">
            <div class="card rounded border border-primary">
            <img src="${imprimir_paginacion.image}" class="card-img-top" alt="imagen-personaje">
                <div class="card-body">
                    <h5 class="card-title text-center">Nombre: ${imprimir_paginacion.name}</h5>
                    <p class="card-text text-center">Especie: ${imprimir_paginacion.species}</p>
                    <p class="card-text text-center">Status: ${imprimir_paginacion.status}</p>
                    <p class="card-text text-center">Genero: ${imprimir_paginacion.gender}</p>
                    <p class="card-text text-center">Ubicación: ${imprimir_paginacion.location.name}</p>
                </div> 
            </div> 
            </div> 
            </div>          
            `
            }
        }).catch(error => console.log(error))

}