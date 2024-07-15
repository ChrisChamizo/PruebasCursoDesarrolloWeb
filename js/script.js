document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.getElementById('menu-icon');
    let menu = document.getElementById('menu');

    // Agregar evento de clic al icono de menú hamburguesa
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
