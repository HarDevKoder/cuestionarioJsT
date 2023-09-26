'use strict';
// Funcion que realiza  el conteo regresivo
const contar = (segundos) => {
  temporizador.style.background = 'green';
  btnEnvioReinicio.textContent='Enviar';
  let conteo = setInterval(() => {
    if (segundos > 0) {
      segundos -= 1;
      if(segundos == 0){
        temporizador.style.background = 'red';
        btnEnvioReinicio.textContent='Reiniciar';
      }else{
        temporizador.style.background = 'green';
      }
      temporizador.textContent = segundos;
    } else {
      clearInterval(conteo);
    }
  }, 1000);
}


// Programa Principal
const temporizador = document.getElementById('temporizador');
const btnEnvioReinicio = document.getElementById('btnEnvioReinicio');

// empiezo el conteo regresivo
contar(30);
