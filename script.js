function obtenerNumeros() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return { n1, n2 };
}

function sumar() {
    let { n1, n2 } = obtenerNumeros();
    document.getElementById("resultado").textContent = n1 + n2;
}

function restar() {
    let { n1, n2 } = obtenerNumeros();
    document.getElementById("resultado").textContent = n1 - n2;
}
