window.addEventListener('load', ()=>{

    document.querySelector('#finestraModal2').style.display = 'none';



    // Enlace muestra politicas
    document.querySelector('#enlaceModal2').addEventListener('click', ventanaModal2);

    // X cierre politicas
    document.querySelector('#cierre2').addEventListener('click', cierreModal2);
});

// Finestra Modal llamada

function ventanaModal2(){
    // Declaracion de variables
    
        let contrato = document.querySelector('#finestraModal2');
        contrato.style.display = 'flex';
    
    }
    
    // Cierre ventana Modal
    
    function cierreModal2(){
    
        let contrato = document.querySelector('#finestraModal2');
        contrato.style.display = 'none';
    
    }