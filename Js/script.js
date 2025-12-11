// Verificar sesión 
function IniciaSesion() {

    let sesion = localStorage.getItem("sesionActiva");

    if (sesion !== "true" && !window.location.href.includes("index.html")) {
        alert("Debes registrarte primero");

        // Te lleva a la sección de registrarse
        window.location.href = "index.html#Registras";
    }
}

IniciaSesion();


// Registrar usuario
function registrar() {
    let correo = document.getElementById("regCorreo").value;
    let contra = document.getElementById("regContra").value;

    if (correo === "" || contra === "") {
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem("correo", correo);
    localStorage.setItem("contra", contra);

    alert("Registro exitoso.Ahora debes iniciar sesión.");

    // Te lleva a la sección de iniciar sesión
    window.location.href = "index.html#iniciarsesion";
}


// Iniciar sesión
function iniciarSesion(event) {
    event.preventDefault(); // evita recargar la página

    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("contraseña").value;

    let correoGuardado = localStorage.getItem("correo");
    let contraGuardada = localStorage.getItem("contra");

    if (correo === correoGuardado && contra === contraGuardada) {
        localStorage.setItem("sesionActiva", "true");
        alert("BIENVENIDO A STEARWAY NORTH POLE");
        window.location.href = "menu.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
}

// --- CARRITO SUPER SIMPLE --- //
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ACTUALIZAR NUMERO DEL CARRITO
function actualizarContador() {
    let contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

// AGREGAR AL CARRITO
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
}

// MOSTRAR LISTA EN carrito.html
function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let totalTexto = document.getElementById("total");

    if (!lista) {
        actualizarContador();
        return;
    }

    let texto = "";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        texto += (i + 1) + ". " + carrito[i].nombre + "  " + carrito[i].precio + ".Bs "+ "<br>";
        total += carrito[i].precio;
    }

    lista.innerHTML = texto;
    totalTexto.innerHTML = "Total: Bs " + total;

    actualizarContador();
}

// VACIAR
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Actualizar al cargar la página
actualizarContador();
mostrarCarrito();


function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("ventanas");
}
