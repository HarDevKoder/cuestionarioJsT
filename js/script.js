'use strict';
// Funcion que realiza  el conteo regresivo
const contar = (segundos) => {
  temporizador.style.background = 'green';
  let conteo = setInterval(() => {
    if (segundos > 0) {
      segundos -= 1;
      (segundos == 0) ? temporizador.style.background = 'red' : temporizador.style.background = 'green';
      temporizador.textContent = segundos;
    } else {
      clearInterval(conteo);
    }
  }, 1000);
}


// Programa Principal
const temporizador = document.getElementById('temporizador');
// empiezo el conte regresivo
contar(30);
