document.addEventListener('DOMContentLoaded', () => {
    //Esto es para cambiar de secciones
    const contenedoresVista = document.querySelectorAll(`.contGeneral,
        .contMusica, .contAmigos, .contBuscar, .contBiblioteca`
    )
    // const botones = document.querySelectorAll('#botonesNavegacion')
    const botones = document.querySelectorAll('.btnNavegacion')
    //Variable para los svg del pie de pagina y que cambien
    const svgPie = document.querySelectorAll('.svgPie')
    if (botones.length > 0) {
        //Si procede entonces significa que encontrro algo

        botones.forEach(botones => {
            if (botones.classList.contains('botonActivo')) {
                botonActivo = botones.classList
                console.log(`El boton activo es: ${botonActivo}`)
            }
            botones.addEventListener('click', () => {
                const valor = botones.value
                const data = botones.dataset.category
                console.log(`La clase es: ${botones.classList}`)
                //Este bloque es para desactivar todos los contenedores sin excepion
                contenedoresVista.forEach(conte => {
                    //Aqui se desactiva los contenedores que esten activo
                    if (conte.classList.contains('ContenedorActivo')) {
                        conte.classList.remove('ContenedorActivo')
                        conte.classList.toggle('ocultarContenedor')
                        botonActivo.remove('botonActivo')
                        if (svgPie.length > 0) {
                            //Esta condicional es para cambiar el el icono del svg
                            //funcionara cuando existan y cuando coincidan con el dataset
                            svgPie.forEach(svgIcono => {
                                const dataIcono = svgIcono.dataset.svg
                                if (svgIcono.classList.contains('svgVisible')) {
                                    console.log('perro')
                                } else {
                                    console.log('no perro')
                                }
                            })
                        } else {
                            console.info('no hay')
                        }
                    }

                    const dataContainer = conte.dataset.container
                    if (data === dataContainer) {
                        //Si es igual entonces se activa
                        conte.classList.remove('ocultarContenedor')
                        conte.classList.toggle('ContenedorActivo')
                        botones.classList.toggle('botonActivo')
                        console.log(`El contenedor que se activo es: ${dataContainer}`)
                    }
                })
            })
        })
    }
    //Se termina la funcionalidad para cambiar de seccion con el uso de botones

    //Lo que te falta hacer es ajustar el cambio de color de los botones de la cabecera con respecto a la seccion que se abre

    //Evento para abrir la playlist o informacion de esta
    const imgBtnEntrar = document.querySelectorAll('.cardImg')
    const btnEntrar = document.querySelectorAll('.entrar')
    imgBtnEntrar.forEach(imgList => {
        imgList.addEventListener('click', () => {
            const dataPlaylist = imgList.dataset.playlist
            console.log(`Entrar a la playlist ${dataPlaylist}`)
            btnEntrar.forEach(btnEntrar => {
                const dataEntrar = btnEntrar.dataset.entrar
                if (btnEntrar.classList.contains('mostrarBtn')) {
                    btnEntrar.classList.remove('mostrarBtn')
                    btnEntrar.classList.toggle('ocultarBtn')
                }
                if (dataPlaylist === dataEntrar) {
                    // console.log(`El valor del boton es: ${dataEntrar}`)
                    btnEntrar.classList.remove('ocultarBtn')
                    btnEntrar.classList.toggle('mostrarBtn')
                }
            })
        })
    })
    //La siguiente funcionalidad es para cuando quieren viajar al perfil de un amigo,
    const btnAmigo = document.querySelectorAll('.contInfo')

    if (btnAmigo.length > 0) {
        btnAmigo.forEach(amigoBtn => {
            amigoBtn.addEventListener('click', () => {
                const dataAmigo = amigoBtn.dataset.amigo
                console.log(`El usuario: ${dataAmigo}`)
            })
        })
    }

    //Esta seccion es la que se agregara las canciones a la base de datos, osea canciones nuevas
    //Este evento siguiente es para mostrar ventana de alerta para agregar canciones
    const btnAgregar = document.getElementById('agregarSong')
    const contAlerta = document.querySelector('.alertaCancion')
    if (btnAgregar && contAlerta) {
        btnAgregar.addEventListener('click', () => {
            if (contAlerta.classList.contains('ocultarAlerta')) {
                contAlerta.classList.remove('ocultarAlerta')
                contAlerta.classList.toggle('mostrarAlerta')
            }
        })
    }

    //Este evento siguiente es para cerrar la alerta de agregar canciones

    const btnCerrarAlerta = document.getElementById('btnCerrarVista')

    if (btnCerrarAlerta) {
        btnCerrarAlerta.addEventListener('click', () => {
            if (contAlerta.classList.contains('mostrarAlerta')) {
                contAlerta.classList.remove('mostrarAlerta')
                contAlerta.classList.toggle('ocultarAlerta')
            }
        })
    }

    // Seccion para agregar la alerta de creacion de la playlist
    const btnNewPlaylist = document.getElementById('agregarPlayList')
    const contPlaylist = document.querySelector('.alertaPlaylist')

    if (btnNewPlaylist && contPlaylist) {
        btnNewPlaylist.addEventListener('click', () => {
            if (contPlaylist.classList.contains('mostrarAlertaP')) {
                contPlaylist.classList.remove('mostrarAlertaP')
            } else {
                contPlaylist.classList.toggle('mostrarAlertaP')
            }
        })
    } else {
        alert('No se encontraron los componentes')
    }
    //Ahora se tiene que cerrar la alerta de la creacion de playlist
    const btnCerrarPlay = document.getElementById('btnCerrarPlaylist')
    if (btnCerrarPlay) {
        btnCerrarPlay.addEventListener('click', () => {
            //Se cambiaran los data class del contenedor de la alerta
            if (contPlaylist.classList.contains('mostrarAlertaP')) {
                contPlaylist.classList.remove('mostrarAlertaP')

            }
        })
    }

    //La siguiente funcionalidad es para acceder a la playlist que se presiono, esto en la seccion de tu biblioteca
    const btnPlay = document.querySelectorAll('.cardPlayList')
    const alertaPlaylist = document.querySelector('.alertContPlaylist')

    if (btnPlay.length > 0 && alertaPlaylist) {
        btnPlay.forEach(difPlaylist =>{
            let datoPlaylist = difPlaylist.dataset.playlist
            difPlaylist.addEventListener('click', () =>{
                console.log(`Entraras a la playlist ${datoPlaylist}`)
                //Ahora se le dara el diseño a la alera para que se acceda a ella 
                if(alertaPlaylist.classList.contains('mostrarAlertaP')){
                    alertaPlaylist.classList.remove('mostrarAlertaP')
                }else{
                    alertaPlaylist.classList.toggle('mostrarAlertaP')
                }
            })
        })
    }
    //boton para salirse de la playlist 
    const btnRegresar= document.getElementById('btnRegresar')
    if(btnRegresar && alertaPlaylist){
        btnRegresar.addEventListener('click', () => {
            if(alertaPlaylist.classList.contains('mostrarAlertaP')){
                alertaPlaylist.classList.remove('mostrarAlertaP')
            }
        })
    }
    //Hacer que se pause el estado en la seccion de la cancion full
    const btnCambiarPR =document.querySelector('.btnCambioEst')
    const svgPausa = document.getElementById('pausa')
    const svgRepro = document.getElementById('reproducir')

    if(btnCambiarPR && svgPausa && svgRepro){
        btnCambiarPR.addEventListener('click', () => {
            //Este sera simple, si uno contiene el estado activo, se borra y se activa el otro, simple
            if(svgPausa.classList.contains('ocultarSvg')){
                //Se remueve el contenedor
                svgPausa.classList.remove('ocultarSvg')
                //y se activa el del otro svg
                svgRepro.classList.toggle('ocultarSvg')
            }else if(svgRepro.classList.contains('ocultarSvg')){
                svgRepro.classList.remove('ocultarSvg')
                svgPausa.classList.toggle('ocultarSvg')
            }
        })
    }
    //Ahora toca activar y desactivar el boton del svg para hacer aparecer la cancion en full
    const btnBajar = document.getElementById('btnBajar')
    const contFullCa = document.querySelector('.fullCancion')
    if(btnBajar && contFullCa){
        btnBajar.addEventListener('click', () =>{
            // alert('dede')
            if(contFullCa.classList.contains('ocultarFull')){
                contFullCa.classList.remove('ocultarFull')
                
            }else{
                contFullCa.classList.remove('ocultarFull')
            }
        })
    }

    //Este es para hacer aparecer el contenedor de la cancion completa
    const btnAbrirCan = document.getElementById('btnAbrirCancion')
    if(btnAbrirCan && contFullCa){
        btnAbrirCan.addEventListener('click', ()=>{
            if(contFullCa.classList.contains('ocultarFull')){
            }else{
                contFullCa.classList.toggle('ocultarFull')
            }
        })
    }

    //te queda hacer las valdaciones con respecto al nomrbe de la tarjeta para mas seguridad
})




