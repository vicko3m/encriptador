const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#mensaje");
const matriz_code = [
    ["e", "enter"],
    ["i", "iems"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptador() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function btnDesencriptador() {
    const textoDesencriptado = desencriptar(campo_mensaje.value);
    campo_texto.value = textoDesencriptado;
}

function btnCopiar() {
    campo_mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function encriptar(fraseEncriptada) {
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseDesencriptada;
}
