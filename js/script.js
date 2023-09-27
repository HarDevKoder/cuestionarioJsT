'use strict';
// Variables Globales
const temporizador = document.getElementById('temporizador');
const btnComandos = document.getElementById('btnComandos');
let respuesta01 = document.getElementById('respuesta01');
let respuesta02 = document.getElementById('respuesta02');
let respuesta03 = document.getElementById('respuesta03');
let respuesta04 = document.getElementById('respuesta04');
let respuesta05 = document.getElementById('respuesta05');
let textoBotonComandos = 'Iniciar';
let nota = 0;

// funcion que ejecuta sonido de tiempo finalizado
const sonidoTiempoFinalizado = () => {
  document.getElementById('sonido').play()
}

// Funcion que realiza  el conteo regresivo
const contar = (segundos) => {
  temporizador.style.background = 'green';
  btnComandos.textContent = 'Enviar';
  let conteo = setInterval(() => {
    if (segundos > 0) {
      segundos -= 1;
      if (segundos === 0) {
        sonidoTiempoFinalizado();
        temporizador.style.background = 'red';
        btnComandos.textContent = 'Iniciar';
        textoBotonComandos = 'Iniciar';
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
      } else {
        temporizador.style.background = 'green';
        textoBotonComandos = 'Enviar';
      }
      temporizador.textContent = segundos;
    } else {
      clearInterval(conteo);
    }
  }, 1000);
}

// Funcion que califica las respuetas
const calificaRespuestas = () => {
  if (respuesta01.value.toLowerCase() === 'html') nota += 1;
  if (respuesta02.value.toLowerCase() === 'css') nota += 1;
  if (respuesta03.value.toLowerCase() === 'javascript') nota += 1;
  if (respuesta04.value.toLowerCase() === 'variables') nota += 1;
  if (respuesta05.value.toLowerCase() === 'settimeout') nota += 1;;
  return nota;
}

//Función que muestra los resultados 
const resultados = () => {
  nota = calificaRespuestas();
  alert(`Respuestas enviadas:
  1- ${respuesta01.value}
  2- ${respuesta02.value}
  3- ${respuesta03.value}
  4- ${respuesta04.value}
  5- ${respuesta05.value}
        
  Tu Calificación es: ${nota}`);
  location.reload();
}

// Programa Principal
document.querySelectorAll('input[type="text"]').forEach(input => input.disabled = true);
btnComandos.addEventListener('click', () => {
  if (textoBotonComandos === 'Iniciar') {
    document.querySelectorAll('input[type="text"]').forEach(input => input.disabled = false);
    temporizador.textContent = '30';
    contar(30);
  } else {
    resultados();
  }
})