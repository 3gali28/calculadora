import { historialOff, historialOn, historialDown, historialUp, ojoCerrado, ojoAbierto,limpiarHistorial } from "./modules/option.mjs";
// export { calcular };

// CONSTANTES EVENTO 


// const limpia = document.getElementById('limparModal');
// limpia.addEventListener('click',limpiarHistorial);

let lim = document.getElementById('limpiarModal');
lim.addEventListener('click', limpiarHistorial);



const botonNumeros = document.getElementsByName('data-number');

const botonOpera = document.getElementsByName('data-opera');

const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

let miHistorial = document.getElementById('historial-menu');
miHistorial.addEventListener('click', historialOn);

//WIDNDOWS MODAL AND BUTTON

let cerrarModal = document.getElementById('cerrar-modal');
cerrarModal.addEventListener('click', historialOff);


const botonDeslizar = document.getElementById('btn-down');
botonDeslizar.addEventListener('click', historialDown);


const botonRetraer = document.getElementById('btn-up');
botonRetraer.addEventListener('click', historialUp);


const abrirOjo = document.getElementById('ojo-cerrado');
abrirOjo.addEventListener('click', ojoCerrado);

const cerrarOjo = document.getElementById('ojo-abierto');
cerrarOjo.addEventListener('click', ojoAbierto);

// END WIDNDOWS MODAL AND BUTTON

// DELETE THE NUMBER OF THE DISPLAY

const borraNum = document.getElementById('borraNunero');
borraNum.addEventListener('click', borraUno);

function borraUno() {
  var contenido = document.getElementById("result").value;
  document.getElementById("result").value = contenido.substring(0, contenido.length - 1);
  {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
  }
}



//   function borraUnoMas() {
// 	var contenido= document.getElementById("result").value;
// 	document.getElementById("result").value+= contenido.substring(0);
// 	// document.getElementById("result").value= contenido.substring(0, contenido.length);

//   }







let resultado = document.getElementById('result');

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function (boton) {
  boton.addEventListener('click', function () {
    agregarNumero(boton.innerText);
  })
});


botonOpera.forEach(function (boton) {
  boton.addEventListener('click', function () {
    selectOperacion(boton.innerText);
  })
});

// let input = document.querySelector('input[type="text"]') = input.value;
// let addHistoy = ()=> {
//   document.getElementById('registerContent').innerText += input.value;
// }


botonIgual.addEventListener('click', function () {
  //  addHistoy();
  calcular();
  actualizarDisplay();


});


botonDelete.addEventListener('click', function () {
  clear();
  // reset();
  actualizarDisplay();

});

function selectOperacion(op) {
  if (opeActual === '') return;
  if (opeAnterior !== '') {
    calcular();
  }
  operacion = op;
  opeAnterior = opeActual;
  opeActual = '';
}

function calcular() {

  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  const salto = ('')
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case '+':
      calculo = anterior + actual;
      document.getElementById('registerContent').innerText += (`${anterior} + ${actual}  =  ${calculo}`+ ('\n'));
    
      break;
    case '-':
      calculo = anterior - actual;
      document.getElementById('registerContent ').innerText += (`${anterior} - ${actual}  =  ${calculo}`+ ('\n'));
      break;
    case '*':
      calculo = anterior * actual;
      document.getElementById('registerContent').innerText += (`${anterior} x ${actual}  =  ${calculo}`+ ('\n'));
      break;
    case '/':
      calculo = anterior / actual;
      document.getElementById('registerContent').innerText += (`${anterior} / ${actual}  =  ${calculo}`+ ('\n'));
      break;

    case '%':
      calculo = ((anterior * actual) / 100);
      document.getElementById('registerContent').innerText += (` % = ${calculo}`+ ('\n'));


      break;

    default: return alert('Invalid')


  }


  opeActual = calculo;
  opeAnterior = '';
  operacion = undefined;


}
// function agregaComa(numero) {
//   let partesNumero = numero.toString().split('.');
//   partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   return partesNumero.join('.');

// }



function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();

}

function clear() {
  opeActual = '';
  opeAnterior = '';
  operacion = undefined;
}

function actualizarDisplay() {
  resultado.value = opeActual;
}


clear();
