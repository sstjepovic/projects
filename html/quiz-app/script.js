const Data = [
    {
        question: "Cual es el nombre real de Goku?",
        a: "Broly",
        b: "Killua",
        c: "Kakarot",
        d: "Kabuto",
        resp: "c"
    }, {
        question: "Cual es el mejor SO?",
        a: "Windows",
        b: "Mac OS",
        c: "Linux",
        d: "Ninguna de las anteriores",
        resp: "c"
    }   
];

const pregunta = document.getElementById('pregunta');
const quiz = document.getElementById('container');
const alternativa_a = document.getElementById('alternativa-a');
const alternativa_b = document.getElementById('alternativa-b');
const alternativa_c = document.getElementById('alternativa-c');
const alternativa_d = document.getElementById('alternativa-d');
const respuestas = document.querySelectorAll('.alternativa');
const enviar = document.getElementById('btnEnviar')
let pregunta_actual = 0;
let puntaje = 0;
cargarPregunta();

function cargarPregunta(){
    limpiar();
    const dataActual = Data[pregunta_actual];
    pregunta.innerText = dataActual.question;
    alternativa_a.innerText = dataActual.a;
    alternativa_b.innerText = dataActual.b;
    alternativa_c.innerText = dataActual.c;
    alternativa_d.innerText = dataActual.d;
}

function obtenerRespuesta(){
    
    let respuesta = undefined;
    respuestas.forEach((buffer) => {
        if (buffer.checked){
            respuesta = buffer.id;
        }
    });
    return respuesta;
}

function limpiar(){
    respuestas.forEach( buffer => {
        buffer.checked = false;
    });
}

enviar.addEventListener("click", () => {

    const respuesta = obtenerRespuesta();

    if (respuesta) {
        if (respuesta === Data[pregunta_actual].resp){
            puntaje++
        }
        pregunta_actual++
        if (pregunta_actual < Data.length){
            cargarPregunta();
        } else {
            quiz.innerHTML = `<h2>Respondiste correctamente : ${puntaje} de ${Data.length} preguntas</h2>
            <button oncLick="location.reload()">Volvear a Intentar</button>`;
        }
        cargarPregunta();
    }
});
