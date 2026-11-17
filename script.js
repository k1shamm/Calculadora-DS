const historial = [];

function obtenerNumeros() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    return { n1, n2 };
}

function mostrarResultado(operacion, simbolo, resultado) {
    document.getElementById("resultado").textContent = resultado;
    historial.unshift(`${operacion.n1} ${simbolo} ${operacion.n2} = ${resultado}`);
    actualizarHistorial();
}

function sumar() {
    const numeros = obtenerNumeros();
    mostrarResultado(numeros, "+", numeros.n1 + numeros.n2);
}

function restar() {
    const numeros = obtenerNumeros();
    mostrarResultado(numeros, "−", numeros.n1 - numeros.n2);
}

function actualizarHistorial() {
    const lista = document.getElementById("listaHistorial");
    lista.innerHTML = "";

    if (historial.length === 0) {
        const item = document.createElement("li");
        item.className = "vacio";
        item.textContent = "Aún no hay operaciones registradas.";
        lista.appendChild(item);
        return;
    }

    historial.forEach(texto => {
        const item = document.createElement("li");
        item.textContent = texto;
        lista.appendChild(item);
    });
}

document.getElementById("limpiarHistorial").addEventListener("click", () => {
    historial.length = 0;
    actualizarHistorial();
});

document.getElementById("tema").addEventListener("click", () => {
    document.body.classList.toggle("claro");
});