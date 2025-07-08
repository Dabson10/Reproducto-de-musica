document.addEventListener('DOMContentLoaded', () =>{
    //Esto es para cambiar de secciones
    const botones = document.querySelectorAll('#botonesNavegacion')
    if(botones.length > 0){
        //Si procede entonces significa que encontrro algo
        botones.forEach(botones =>{
            botones.addEventListener('click', () =>{
                const valor = botones.value
                const data = botones.dataset.category
                alert(`Navegaras a ${data}`)
            })
        })
    }
})