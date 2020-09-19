const ddias = document.getElementById('dias');
const dhoras = document.getElementById('horas')
const dminutos = document.getElementById('minutos')
const dsegundos = document.getElementById('segundos')
const miCumpleanios = "1 Jan 2021"

// Se puede cambiar la constante "mi cumpleanios" por cualquier fecha objetivo
function countdown () {

    const fechaObjetivo = new Date(miCumpleanios);
    const fechaActual = new Date();

    const segundosTotales = (fechaObjetivo - fechaActual) / 1000;
    const dias = Math.floor(segundosTotales / 3600 / 24);
    const horas = Math.floor(segundosTotales / 3600) % 24;
    const minutos = Math.floor (segundosTotales / 60) % 60;
    const segundos = Math.floor(segundosTotales % 60);
    console.log(dias, horas, minutos, segundos);

    ddias.innerHTML = dias;
    dhoras.innerHTML = formatear(horas);
    dminutos.innerHTML = minutos;
    dsegundos.innerHTML = formatear(segundos);
}

function formatear(time) {
    return time < 10 ? `0${time}` : time;
}
// Llamada inicial
countdown();

// Intervalo de 1 segundo
setInterval(countdown, 1000);