// Bloquear paginas si no hay sesion

function InicioSesion() {
    const inicia = localStorage.getItem("Iniciando...");

// Si no está iniciando y no está en la página de inicio => volver a inicio

    if (!inicia && !window.location.href.includes("inicio.html") && !window.location.href.endsWith("/")) {
        alert("Debes iniciar sesión para acceder a la pagina");
        window.location.href = "inicio.html";
    }
}

InicioSesion();


// Iniciar sesión

const Iniciar = document.querySelector('.button');
if (Iniciar) {
    Iniciar.addEventListener('click', function(e) {
        e.preventDefault();

        const correo = document.getElementById("correo").value;
        const contra = document.getElementById("contraseña").value;

        if (correo === "" || contra === "") {
            alert("Por favor complete todos los campos");
            return;
        }

        // Guardamos la sesión
        localStorage.setItem("Iniciando...", "true");
        alert("¡Bienvenido a StearWay North Pole!");

        // Redirige automáticamente
        window.location.href = "menu.html";
    });
}


function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("ventanas");
}
