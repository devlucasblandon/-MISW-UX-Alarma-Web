document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('createUserForm');

    // Solo manejar el envío del formulario para redireccionar
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'creacion-exitosa.html';
    });
}); 