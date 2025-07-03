document.addEventListener("DOMContentLoaded",()=>{
    const btnIngresar = document.getElementById('btnIngre')
    const btnRegistrar = document.getElementById('btnReg')
    const btnVerContra = document.getElementById('ver_no-ver')


    //Valores de los inputs
    const textContra = document.getElementById('textContra')

    //Diseño del boton de ver o no ver la contraseña
    const ver = document.getElementById("ver")
    const no_ver = document.getElementById("no-ver")
    no_ver.style.visibility = "hidden"
    //Inicialmente el boton de ingresar debera tener un color
    btnIngresar.style.color = '#ffff'
    btnIngresar.style.borderBottom = '2px solid #fff'
    //Y para verificar el estado del boton presionado es con boolean
    let ingreso = true
    let registro = false

    //Evento para acceder cambiar el formulario.
    btnIngresar.addEventListener('click', () =>{
        if(ingreso === true){
            conspole.log("Ya estas en esa seccion")
        }else{
            //Esta es la accion que cambia la vista del formulario a Ingresar
            console.log("Ingresando")
            btnIngresar.style.color = '#ffff'
            btnIngresar.style.borderBottom = '2px solid #fff'
            ingreso = true
            registro = false
            btnRegistrar.style.color = '#8d8c8c'
            btnRegistrar.style.border = 'none'
        }
    })
    btnRegistrar.addEventListener('click', () =>{
        if(registro === true){
            console.log("Ya estas en el registro")
        }else{
            //Esta es la accion para mostrar la vista de registro y ocultar la de ingreso
            console.log("Ingresando al registro")
            registro = true
            btnIngresar.style.color = '#8d8c8c'
            btnIngresar.style.border = 'none'
            ingreso = false
            btnRegistrar.style.color = '#FFFF'
            btnRegistrar.style.borderBottom = '2px solid #fff'
        }
    })


    //Evento para ver la contraseña ingresada
    btnVerContra.addEventListener('click', (event) =>{
        event.preventDefault();
        let valor = textContra.type
        console.log(`El tipo es: ${valor}`)
        if(valor === "password"){
            textContra.type = "text"
            textContra.placeholder = "Contraseña"
            no_ver.style.visibility = "visible"
            ver.style.visibility = "hidden"
        }else{
            textContra.type = "password"
            textContra.placeholder = "**********"
            ver.style.visibility = "visible"
            no_ver.style.visibility = "hidden"
        }
    })

})//Fin de la lectura del documento