window.addEventListener('load', ()=>{

    document.querySelector('#finestraModal').style.display = 'none';


    // X cierre modal
    document.querySelector('#cierre').addEventListener('click', cierreModal);


    // Boton de envio
    document.querySelector('#botonEnvia').addEventListener('click', enviarFormulario);
});

// Menu Mobile
    // Declaracion Variables

let menuBoton = document.querySelector('.material-symbols-outlined');
let menuMobile = document.querySelector('.mobile');

menuBoton.addEventListener('click', ()=>{
    menuMobile.classList.remove('deshow');

    if(menuMobile.classList == 'mobile'){
        // Mostrar menu nav translate
        menuMobile.classList.add('show');

        // Animar con clases el boton del menu mobile
        menuBoton.classList.add('activoTemp');
        menuBoton.classList.add('activo');
        menuBoton.textContent = 'close';

    }else{
        // Mostrar menu nav translate
        menuMobile.classList.remove('show');
        menuMobile.classList.add('deshow');

        // Animar con clases el boton del menu mobile
        menuBoton.textContent = 'menu';
        menuBoton.classList.remove('activoTemp');
        menuBoton.classList.remove('activo');

    }
});

// ============================================================

// Animacion de Iconos
let iconos = document.getElementById('logos');

let contador = iconos.getAttribute('src');
let cuenta = contador.charAt(4);

// Funcion pasar iconos
function pasando(){
    cuenta++;
    // No funciona correctamente
    // iconos.classList.toggle('aparicion');

    if(cuenta < 5){

            switch(cuenta){
                case 1:
                    iconos.setAttribute('src', 'img/1.png');
                    break;
                case 2:
                    iconos.setAttribute('src', 'img/2.png');
                    break;
                case 3:
                    iconos.setAttribute('src', 'img/3.png');
                    break;
                case 4:
                    iconos.setAttribute('src', 'img/4.png');
                    break;
            }

    }else{
        cuenta = 0;
    }


}

// Funcion activar/desactivar clase aparicion
function estilo(){
iconos.classList.toggle('aparicion');
}

// Llamada de funciones
setInterval(pasando, 2000);
setInterval(estilo, 2000);






// ==============================================================
// FORMULARIO

// Declaracion de variables
let nom = document.querySelector('#nom');
let correu = document.querySelector('#correu');
let comunicado = document.querySelector('#comunicado');


// console.log(nom.value);

// Expresiones regulares
const expresion1= /^\w[a-zA-Zà-ÿ ]{1,}$/;

const expresion2 = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

const expresion3= /^\w[ -€]{0,}$/;


// Validacion de campos

function validacion(campo, campoValue, expresion){

    if(campoValue == null || campoValue.length == 0 || !(expresion.test(campoValue))){
        campo.className = 'error';
        console.log('MAL');
        return false;
    }else{
        campo.className = 'noError';
        console.log('BIEN');

        return true;
    }
}

// Validacion del checkbox politica de privacidad

function validaPolitica(){
    let politicaPrivacidad = document.querySelector('#condiciones');

    if(!politicaPrivacidad.checked){
        alert('- Debe aceptar nuestra politica de privacidad');
        return false;

    }else{
        return true;
    }
}

// Funcion validadora
function enviarFormulario(){
    let valido = 0;

    if(validacion(nom, nom.value, expresion1)) valido++;
    if(validacion(correu, correu.value, expresion2)) valido++;
    if(validacion(comunicado, comunicado.value, expresion3)) valido++;
    if(validaPolitica()) valido++;

    if(valido === 4){
        alert('Formulario enviado con éxito, gracias!');
        let formulario = document.querySelector('#formulario');
        formulario.submit();
    }
}
// Llamada por window EVENT


// Finestra Modal llamada
let proyectos = document.querySelectorAll('#proyectos>section>figure>img');

proyectos.forEach((imagen) =>{
    imagen.addEventListener('click', ()=>{
            // Declaracion de variables
    
            let ventana = document.querySelector('#finestraModal');
            ventana.style.display = 'flex';
    
            let direccion = imagen.getAttribute('src');
            let github = imagen.getAttribute('alt');

            let mostrar = document.querySelector('#muestra');
            let enlazar = document.getElementById('enlace');

            enlazar.innerHTML = `<a href="${github}" target="_blank">Navega esta web en GitHub Pages</a>`;
            mostrar.setAttribute('src', direccion);
        
    })
})
    
    // Cierre ventana Modal
    
    function cierreModal(){
    
        let contrato = document.querySelector('#finestraModal');
        contrato.style.display = 'none';
    
    }