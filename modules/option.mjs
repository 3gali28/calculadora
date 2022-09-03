export { historialOff, historialOn, historialDown, historialUp, ojoCerrado, ojoAbierto,limpiarHistorial };
// import { } from "../modules/main.js";


function historialOff(event) {
    event.preventDefault()
    document.getElementById('ventana').style.display = 'none'
    document.getElementById('registerContent').style.fontSize = '0px';
    document.getElementById('ventana').style.height = '20%';
    document.getElementById('btn-up').style.display = 'none';
    document.getElementById('btn-down').style.display = 'flex';
    document.getElementById('registerContent').style.fontSize = '0px';
    document.getElementById('ojo-abierto').style.display = 'none';
    document.getElementById('ojo-cerrado').style.display = 'flex';

};

    function limpiarHistorial(event) {
    event.preventDefault()
        let reset =document.getElementById('registerContent');
      
    }

function historialOn(event) {
    event.preventDefault()
    document.getElementById('ventana').style.display = 'block'
};


function historialDown(event) {
    event.preventDefault()
    document.getElementById('ventana').style.height = '80%';
    document.getElementById('ventana').style.overflow = 'scroll';
    document.getElementById('ventana').style.transition = '1s ease-out';
    document.getElementById('btn-down').style.display = 'none';
    document.getElementById('btn-up').style.display = 'flex';
    
};

function historialUp(event) {
    event.preventDefault()
    document.getElementById('btn-up').style.display = 'none';
    document.getElementById('upHistorial').style.display = 'block';
    document.getElementById('btn-down').style.display = 'flex';
    document.getElementById('ventana').style.height = '20%';
};


function ojoCerrado(event) {
    event.preventDefault()
    document.getElementById('ojo-cerrado').style.display = 'none';
    document.getElementById('ojo-abierto').style.display = 'flex';
    document.getElementById('registerContent').style.fontSize = '25px';
    document.getElementById('ventana').style.backgroundColor = '#fff';
   
};

function ojoAbierto(event) {
    event.preventDefault()
    document.getElementById('ojo-abierto').style.display = 'none';
    document.getElementById('ojo-cerrado').style.display = 'flex';
    document.getElementById('registerContent').style.fontSize = '0px';
    document.getElementById('ventana').style.backgroundColor = '#9198e5';
};





