'use strict';
let reiniciarProceso = false;
// Funcion que realiza  el conteo regresivo
const contar = (segundos) => {
  temporizador.style.background = 'green';
  btnEnvioReinicio.textContent = 'Enviar';
  let conteo = setInterval(() => {
    if (segundos > 0) {
      segundos -= 1;
      if (segundos == 0) {
        temporizador.style.background = 'red';
        btnEnvioReinicio.textContent = 'Reiniciar';
        reiniciarProceso = true;
      } else {
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

// Conteo regresivo
contar(10);

// Botón Envio/Reinicio
btnEnvioReinicio.addEventListener('click', () => {
  if (reiniciarProceso) {
    location.reload();
  } else {
    alert('Datos Enviados:');
  }
})