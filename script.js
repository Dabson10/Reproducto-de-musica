document.addEventListener("DOMContentLoaded",()=>{
    const btnIngresar = document.getElementById('btnIngre')
    const btnRegistrar = document.getElementById('btnReg')
    const btnVerContra = document.getElementById('ver_no-ver')
    const btnVerContraReg = document.getElementById('ver_no-ver_Reg')
    //Contenedores de los formularios
    const contForm = document.getElementById("contForms")
    const contLogin = document.getElementById("contLogin")
    const contRegis = document.getElementById("contReg")
    /* Inputs del login
        Valores de los inputs del login o ingresar, solo es el nombre y contraseñá
     */
    const textContra = document.getElementById('textContra')
    const textCorreo = document.getElementById('correoLogin')
    const btnEnviarDatosLogin = document.getElementById('ingresarLogin')
    //Inputs del registro de nuevos usuarios
     //Valor de los inputs del registro
    const textNombreUsuReg = document.getElementById('nombreUsuReg')
    const textApellidoReg = document.getElementById('apellidoReg')
    const textCorreoReg = document.getElementById('correoRegistro')
    const textContraReg1 = document.getElementById('inContraReg1')
    const textContraReg2 = document.getElementById('inContraReg2')
    const btnIngresarDataReg = document.getElementById('ingresarRegistro')

    //Diseño del boton de ver o no ver la contraseña
    const ver = document.getElementById("ver")
    const no_ver = document.getElementById("no-ver")
    no_ver.style.visibility = "hidden"
    contForm.style.height = "30vh"
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
            //Tamaño del contenedor minimo
            contForm.style.height = "30vh"
            //Se activa el contenedor de ingresar y se desactiva el de registrar
            contLogin.style.visibility = "visible"
            contRegis.style.visibility = "hidden"
            //En esta parte lo que se hara es darle una altura, 
            //esto por que los contenedores de los formularios estaran con 
            //position: absolute; por lo que el fondo se hara pequeño 
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
            //Se desactiva el login y se activa el registro
            contLogin.style.visibility = "hidden"
            contRegis.style.visibility = "visible"
            contForm.style.height = "55vh"
        }
    })


    //Evento para ver la contraseña ingresada en login
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
    //Evento para ver y ocultar la contraseña en la seccion de registro.
    btnVerContraReg.addEventListener('click', (event)=>{
        event.preventDefault();
        let contra1 = textContraReg1
        let contra2 = textContraReg2
        console.log(`El valor de contra 1 es ${contra1.type}
            \ny el de contra2 es ${contra2.type}`)

        if(contra1.type == "password" && contra2.type == "password"){
            contra1.type = "text"
            contra1.placeholder = "Contraseña"
            contra2.type = "text"
            contra2.placeholder = "Contraseñá"
            // console.log(`El valor de contra 1 es ${contra1.type}`)
        }else{
            //En esta seccion se aplica lo contrario se convierte de texto a password
            contra1.type = "password"
            contra1.placeholder = "**********"
            contra2.type = "password"
            contra2.placeholder = "**********"
            
        }
    })
    //Fin del uso de js para animaciones u otras cosas
    /* Despues de esta parte agreguen la logica que necesiten para mandar informacion o algo */
    //Ahora se realizara el mandado de informacion y cambio de pagina a el panel de control
    btnEnviarDatosLogin.addEventListener('click', (event)=>{
        event.preventDefault()
        navegacion("./html/panelControl.html")
    })

    //Esta funcion es para reutilizar mas que nada abre la pagina del panel de control a traves de un parametro de esta funcion 
    function navegacion(url){
        window.open(url, "_self")
    }
})//Fin de la lectura del documento