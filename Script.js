// Frases buena onda para Lizbeth (puedes cambiarlas o agregar más)
const frases = [
    "Para mi, eres la mejor",
    "Siempre espero tu mensaje con una sonrisa 😊",
    "Siddhartha es un cantante que aprecio ahora por ti, gracias por compartirlo conmigo",
    "La mas bontia con vestidos pegados 🔥",
    "Proverbio 3:15",
    "Cuando te enojas, me gusta mucho tu sonido de desesperacion, es tan adorable",
    "Sabias que tu nombre tiene la caracteriztica de ser fiel y entregada?",
    "Me encanta tu sonrisa",
    "Harry Styles es un gran cantante, gracias por compartirlo conmigo",
    "Gracias por ser tan paciente conmigo",
    "No hemos ido a comer esquites, ni nada 🤡",
    "Ya me enoje alb",
    "Cuando tomemos juntos y termine mal, me toams foto, me gusta humillarme",

];

// Elementos del DOM
const giftBox = document.getElementById('gift-box');
const surpriseContent = document.getElementById('surprise-content');
const btnPhrase = document.getElementById('btn-phrase');
const phraseText = document.getElementById('phrase-text');
const btnCounter = document.getElementById('btn-counter');
const counterNum = document.getElementById('counter');

let clickCount = 0;

// 1. Evento para abrir el regalo
giftBox.addEventListener('click', () => {
    // Escondemos la caja con una animación rápida
    giftBox.style.transition = 'all 0.5s ease';
    giftBox.style.opacity = '0';
    giftBox.style.transform = 'scale(0)';

    setTimeout(() => {
        giftBox.classList.add('hidden');
        // Mostramos la sorpresa
        surpriseContent.classList.remove('hidden');
    }, 500);
});

// 2. Evento para el generador de frases
btnPhrase.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    phraseText.textContent = frases[randomIndex];
});

// 3. Evento para el contador de sonrisas
btnCounter.addEventListener('click', () => {
    clickCount++;
    counterNum.textContent = clickCount;

    // Un pequeño toque dinámico si llega a muchos clics
    if (clickCount === 10) {
        alert("¡Eso es tener buena actitud! ¡Sigue sonriendo! 😁");
    }
    // Una pequeña sorpresa al llegar a 20 clics
    if (clickCount === 20) {
        alert("¡Wow, 20 sonrisas! ¡Eres increíble! 🌟");
    }

    // Una pequeña sorpresa al llegar a 50 clics
    if (clickCount === 50) {
        alert("¡50 sonrisas! ¡Eres una fuente de alegría! 🎉");
    }

    // Una pequeña sorpresa al llegar a 100 clics
    if (clickCount === 100) {
        alert("Ya bajale mija, no te pases, tampoco me humilles jaja😅");
    }
});

// ==========================================
// LÓGICA DE LA CUENTA REGRESIVA (SIDDHARTHA)
// ==========================================

// Configuramos la fecha del concierto (Año, Mes - 1, Día, Hora, Minutos)
// Nota: En JS los meses van de 0 a 11, por eso Septiembre es el mes 8
const fechaConcierto = new Date(2026, 8, 3, 20, 0, 0).getTime();

const actualizarCuentaRegresiva = () => {
    const ahora = new Date().getTime();
    const distancia = fechaConcierto - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Si la fecha ya pasó o estamos en el evento
    if (distancia < 0) {
        clearInterval(intervalo);
        document.querySelector('.countdown-display').innerHTML = "<h3 style='color: #81c784; margin: 15px 0;'>¡Llegó el día! 🎤🎶</h3>";
        return;
    }

    // Insertar los valores en el HTML agregando un cero a la izquierda si es menor a 10
    document.getElementById('days').textContent = dias < 10 ? '0' + dias : dias;
    document.getElementById('hours').textContent = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutes').textContent = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('seconds').textContent = segundos < 10 ? '0' + segundos : segundos;
};

// Ejecutar la función una vez y luego programar que corra cada 1 segundo (1000 ms)
actualizarCuentaRegresiva();
const intervalo = setInterval(actualizarCuentaRegresiva, 1000);