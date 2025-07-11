document.addEventListener('DOMContentLoaded', () => {
    //Esto es para cambiar de secciones
    const contenedoresVista = document.querySelectorAll(`.contGeneral,
        .contMusica, .contAmigos, .contBuscar, .contBiblioteca`
    )
    // const botones = document.querySelectorAll('#botonesNavegacion')
    const botones = document.querySelectorAll('.btnNavegacion')
    if (botones.length > 0) {
        //Si procede entonces significa que encontrro algo
        let botonActivo = ""
        botones.forEach(botones => {
            if(botones.classList.contains('botonActivo')){
                botonActivo = botones.classList
                console.log(`El boton activo es: ${botonActivo}`)
            }
            botones.addEventListener('click', () => {
                const valor = botones.value
                const data = botones.dataset.category
                console.log(`La clase es: ${botones.classList}`)
                //Este bloque es para desactivar todos los contenedores sin excepion
                    contenedoresVista.forEach(conte =>{
                        //Aqui se desactiva los contenedores que esten activo
                        if(conte.classList.contains('ContenedorActivo') ){
                            conte.classList.remove('ContenedorActivo')
                            conte.classList.toggle('ocultarContenedor')
                            botonActivo.remove('botonActivo')
                        }
                        
                        const dataContainer = conte.dataset.container
                        if(data === dataContainer){
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
imgBtnEntrar.forEach(imgList =>{
    imgList.addEventListener('click',()=>{
        const dataPlaylist = imgList.dataset.playlist
        console.log(`Entrar a la playlist ${dataPlaylist}`)
        btnEntrar.forEach(btnEntrar =>{
            const dataEntrar = btnEntrar.dataset.entrar
            if(btnEntrar.classList.contains('mostrarBtn')){
                btnEntrar.classList.remove('mostrarBtn')
                btnEntrar.classList.toggle('ocultarBtn')
            }
            if(dataPlaylist === dataEntrar){
                // console.log(`El valor del boton es: ${dataEntrar}`)
                btnEntrar.classList.remove('ocultarBtn')
                btnEntrar.classList.toggle('mostrarBtn')
            }
        })
    })
})
//La siguiente funcionalidad es para cuando quieren viajar al perfil de un amigo,
const btnAmigo = document.querySelectorAll('.contInfo')

if(btnAmigo.length > 0){
    btnAmigo.forEach(amigoBtn => {
    amigoBtn.addEventListener('click', () =>{
        const dataAmigo = amigoBtn.dataset.amigo
        console.log(`El usuario: ${dataAmigo}`)
    })
})
}

//te queda hacer las valdaciones con respecto al nomrbe de la tarjeta para mas seguridad
})




