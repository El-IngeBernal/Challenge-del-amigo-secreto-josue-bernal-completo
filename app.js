let amigos = [];

function agregarAmigo() {
    // Aqui se atrapa el valor del campo que va a entrar 
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validación de la entrada o sea que no que no esté vacía pues xd
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de los panas
    amigos.push(nombre);

    // Aplicar la cenicienta (Limpiar campo de entrada pues jaja)
    inputNombre.value = "";

    // Actualizar la lista de amigos en interfaz
    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente (otra vez cenicienta)
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista xd
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos disponibles antes de sortear (no vaya a ser la de a malas)
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return;
    }

    // Generar un índice random 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre de afortunado 
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado del ganador
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>${amigoSorteado}</strong> es el amigo secreto</li>`;
}
