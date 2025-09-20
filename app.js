// app.js
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = "";
}

function actualizarLista() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // 5. Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
