// ---------------------
// Bloquear páginas si no hay sesión
// ---------------------
function checkLogin() {
    const logged = localStorage.getItem("logueado");

    // Si no está logueado y no está en la página de inicio => volver a inicio
    if (!logged && !window.location.href.includes("inicio.html") && !window.location.href.endsWith("/")) {
        alert("⚠ Debes iniciar sesión para acceder al menú y promociones");
        window.location.href = "inicio.html";
    }
}

checkLogin();

// ---------------------
// Iniciar sesión básico
// ---------------------
const btnLogin = document.querySelector('.button');
if (btnLogin) {
    btnLogin.addEventListener('click', function(e) {
        e.preventDefault(); // Evita refrescar

        const email = document.getElementById("correo").value;
        const pass = document.getElementById("contraseña").value;

        if (email === "" || pass === "") {
            alert("Por favor, completa todos los campos");
            return;
        }

        // Guardamos la sesión
        localStorage.setItem("logueado", "true");
        alert("¡Bienvenido a StearWay! 👋");

        // Redirige automáticamente
        window.location.href = "menu.html";
    });
}

// ---------------------
// Abrir / cerrar menú hamburguesa
// ---------------------
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

