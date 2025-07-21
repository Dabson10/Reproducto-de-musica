const SUPABASE_URL = 'https://cnyspgtbwiouqqdazwrk.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueXNwZ3Rid2lvdXFxZGF6d3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNjk0NzQsImV4cCI6MjA2Nzk0NTQ3NH0.jK9BSKdJAoPXVsk_W15AG-POe71AXvOeI1UUmxhunCY'

// Inicialización de Supabase 
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const btnIngresar = document.getElementById('btnIngre')
    const btnRegistrar = document.getElementById('btnReg')
    const btnVerContra = document.getElementById('ver_no-ver')
    const btnVerContraReg = document.getElementById('ver_no-ver_Reg')

    // Contenedores de los formularios
    const contForm = document.getElementById("contForms")
    const contLogin = document.getElementById("contLogin")
    const contRegis = document.getElementById("contReg")

    // Inputs del login
    const textContra = document.getElementById('textContra')
    const textCorreo = document.getElementById('correoLogin')
    const btnEnviarDatosLogin = document.getElementById('ingresarLogin')

    // Inputs del registro
    const textNombreUsuReg = document.getElementById('nombreUsuReg')
    const textApellidoReg = document.getElementById('apellidoReg')
    const textCorreoReg = document.getElementById('correoRegistro')
    const textContraReg1 = document.getElementById('inContraReg1')
    const textContraReg2 = document.getElementById('inContraReg2')
    const btnIngresarDataReg = document.getElementById('ingresarRegistro')

    // Elementos para mostrar/ocultar contraseña
    const ver = document.getElementById("ver")
    const no_ver = document.getElementById("no-ver")

    // Verificar que los elementos existan antes de usarlos
    if (!ver || !no_ver) {
        console.error("Elementos 'ver' o 'no-ver' no encontrados en el DOM")
        return
    }

    no_ver.style.visibility = "hidden"
    if (contForm) contForm.style.height = "30vh"

    // Configuración inicial
    if (btnIngresar) {
        btnIngresar.style.color = '#ffff'
        btnIngresar.style.borderBottom = '2px solid #fff'
    }

    // Variables de estado
    let ingreso = true
    let registro = false

    // Función para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    // Función para validar contraseña
    function validarContrasena(password) {
        return password.length >= 6 // Mínimo 6 caracteres
    }

    // Evento para cambiar a formulario de ingreso
    if (btnIngresar) {
        btnIngresar.addEventListener('click', () => {
            if (ingreso === true) {
                console.log("Ya estas en esa sección")
            } else {
                console.log("Ingresando")
                btnIngresar.style.color = '#ffff'
                btnIngresar.style.borderBottom = '2px solid #fff'
                ingreso = true
                registro = false

                if (btnRegistrar) {
                    btnRegistrar.style.color = '#8d8c8c'
                    btnRegistrar.style.border = 'none'
                }

                if (contForm) contForm.style.height = "30vh"
                if (contLogin) contLogin.style.visibility = "visible"
                if (contRegis) contRegis.style.visibility = "hidden"
            }
        })
    }

    // Evento para cambiar a formulario de registro
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', () => {
            if (registro === true) {
                console.log("Ya estas en el registro")
            } else {
                console.log("Ingresando al registro")
                registro = true

                if (btnIngresar) {
                    btnIngresar.style.color = '#8d8c8c'
                    btnIngresar.style.border = 'none'
                }

                ingreso = false
                btnRegistrar.style.color = '#FFFF'
                btnRegistrar.style.borderBottom = '2px solid #fff'

                if (contLogin) contLogin.style.visibility = "hidden"
                if (contRegis) contRegis.style.visibility = "visible"
                if (contForm) contForm.style.height = "55vh"
            }
        })
    }

    // Evento para ver/ocultar contraseña en login
    if (btnVerContra && textContra) {
        btnVerContra.addEventListener('click', (event) => {
            event.preventDefault()

            if (textContra.type === "password") {
                textContra.type = "text"
                textContra.placeholder = "Contraseña"
                no_ver.style.visibility = "visible"
                ver.style.visibility = "hidden"
            } else {
                textContra.type = "password"
                textContra.placeholder = "**********"
                ver.style.visibility = "visible"
                no_ver.style.visibility = "hidden"
            }
        })
    }

    // Evento para ver/ocultar contraseña en registro
    if (btnVerContraReg && textContraReg1 && textContraReg2) {
        btnVerContraReg.addEventListener('click', (event) => {
            event.preventDefault()

            if (textContraReg1.type === "password" && textContraReg2.type === "password") {
                textContraReg1.type = "text"
                textContraReg1.placeholder = "Contraseña"
                textContraReg2.type = "text"
                textContraReg2.placeholder = "Confirmar contraseña"
            } else {
                textContraReg1.type = "password"
                textContraReg1.placeholder = "**********"
                textContraReg2.type = "password"
                textContraReg2.placeholder = "**********"
            }
        })
    }

    // Evento para login
    if (btnEnviarDatosLogin) {
        btnEnviarDatosLogin.addEventListener('click', async (event) => {
            event.preventDefault()

            const correo = textCorreo?.value?.trim() || ''
            const contrasena = textContra?.value?.trim() || ''

            // Validaciones de los campos
            if (!correo || !contrasena) {
                alert("Por favor, completa todos los campos.")
                return
            }

            if (!validarEmail(correo)) {
                alert("Por favor, ingresa un email válido.")
                return
            }

            try {
                // Intento del inicio del sesion 
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: correo,
                    password: contrasena
                })

                if (error) {
                    console.error("Error Supabase:", error)

                    // Alerta para la confirmacion del email en bandeja de entrada
                    if (error.message.toLowerCase().includes('email not confirmed')) {
                        alert("Por favor, confirma tu correo electrónico antes de iniciar sesión.")
                    } else if (error.message.toLowerCase().includes('invalid login credentials')) {
                        alert("Correo o contraseña incorrectos.")
                    } else {
                        alert("Error al iniciar sesión: " + error.message)
                    }

                    return
                }

                if (!data || !data.session || !data.user) {
                    alert("Inicio de sesión fallido. Intenta nuevamente.")
                    return
                }

                console.log("Login exitoso. Usuario:", data.user)

                // Redirigir al panel de control
                window.location.href = "./html/panelControl.html"

            } catch (err) {
                console.error("Excepción inesperada:", err)
                alert("Ocurrió un error inesperado al iniciar sesión. Intenta más tarde.")
            }
        })
    }


    // Evento para registro
    if (btnIngresarDataReg) {
        btnIngresarDataReg.addEventListener('click', async (event) => {
            event.preventDefault()

            const nombre = textNombreUsuReg?.value?.trim() || ''
            const apellido = textApellidoReg?.value?.trim() || ''
            const correo = textCorreoReg?.value?.trim() || ''
            const contrasena = textContraReg1?.value?.trim() || ''
            const repetirContra = textContraReg2?.value?.trim() || ''

            // Validaciones
            if (!nombre || !apellido || !correo || !contrasena || !repetirContra) {
                alert("Por favor, completa todos los campos")
                return
            }

            if (!validarEmail(correo)) {
                alert("Por favor, ingresa un email válido")
                return
            }

            if (contrasena.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres")
                return
            }

            if (contrasena !== repetirContra) {
                alert("Las contraseñas no coinciden")
                return
            }

            try {
                // Registro en Auth con configuración para confirmación
                console.log("Registrando en Auth...")
                const { data: authData, error: authError } = await supabase.auth.signUp({
                    email: correo,
                    password: contrasena,
                    options: {
                        data: {
                            nombre_completo: `${nombre} ${apellido}`
                        }
                    }
                })

                if (authError) {
                    console.error("Error Auth:", authError)
                    alert("Error al registrar: " + authError.message)
                    return
                }

                // Si el usuario necesita confirmar email
                if (authData.user && !authData.user.email_confirmed_at) {
                    alert("¡Registro exitoso! Te hemos enviado un email de confirmación. Por favor, revisa tu bandeja de entrada y haz click en el enlace para activar tu cuenta.")

                    // Limpiar formulario
                    textNombreUsuReg.value = ''
                    textApellidoReg.value = ''
                    textCorreoReg.value = ''
                    textContraReg1.value = ''
                    textContraReg2.value = ''

                    btnIngresar.click()
                    return
                }

                // Insertar datos en la tabla usuarios
                const datosUsuario = {
                    id_usuario: authData.user.id, // Usar el ID de Auth
                    nombre_usuario: `${nombre} ${apellido}`,
                    correo: correo,
                    contraseña: contrasena,
                    fecha_registro: new Date().toISOString(),
                    foto_perfil: null
                }

                console.log("Insertando datos:", datosUsuario)

                const { data: insertData, error: insertError } = await supabase
                    .from("usuarios")
                    .insert([datosUsuario])
                    .select()

                if (insertError) {
                    console.error("Error inserción:", insertError)
                    alert("Error al guardar: " + insertError.message)
                    return
                }

                console.log("Usuario registrado completamente")
                alert("¡Usuario registrado correctamente!")

                // Limpiar formulario
                textNombreUsuReg.value = ''
                textApellidoReg.value = ''
                textCorreoReg.value = ''
                textContraReg1.value = ''
                textContraReg2.value = ''

                btnIngresar.click()

            } catch (err) {
                console.error("Error:", err)
                alert("Error inesperado: " + err.message)
            }
        })
    }


})