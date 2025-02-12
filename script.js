// Generar un número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];

function adivinarNumero() {
    let inputUsuario = document.getElementById("inputNumero").value;
    let numeroUsuario = Number(inputUsuario);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mostrarMensaje("Por favor, ingresa un número válido entre 1 y 100.");
        return;
    }
    
    intentos.push(numeroUsuario);
    
    if (numeroUsuario === numeroSecreto) {
        mostrarMensaje(`🎉 Felicidades, adivinaste el número secreto (${numeroSecreto})`);
        mostrarMensaje(`Intentos realizados: ${intentos.join(", ")}`);
    } else {
        mostrarMensaje("❌ Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}

function mostrarMensaje(mensaje) {
    let resultadoDiv = document.getElementById("resultado");
    let p = document.createElement("p");
    p.textContent = mensaje;
    resultadoDiv.appendChild(p);
}
