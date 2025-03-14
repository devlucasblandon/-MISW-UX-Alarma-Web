document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const usuarioError = document.getElementById('usuarioError');
    const contrasenaError = document.getElementById('contrasenaError');
    const crearUsuarioBtn = document.querySelector('.button-group .secondary');

    // Agregar evento al botón Crear Usuario
    crearUsuarioBtn.addEventListener('click', function() {
        window.location.href = 'crear-usuario.html';
    });

    function showError(element, errorElement) {
        element.classList.add('input-error');
        errorElement.style.display = 'block';
    }

    function hideError(element, errorElement) {
        element.classList.remove('input-error');
        errorElement.style.display = 'none';
    }

    usuarioInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
            showError(this, usuarioError);
        } else {
            hideError(this, usuarioError);
        }
    });

    contrasenaInput.addEventListener('blur', function() {
        if (!this.value) {
            showError(this, contrasenaError);
        } else {
            hideError(this, contrasenaError);
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        if (!usuarioInput.value.trim()) {
            showError(usuarioInput, usuarioError);
            isValid = false;
        }

        if (!contrasenaInput.value) {
            showError(contrasenaInput, contrasenaError);
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'bienvenidos.html';
        }
    });

    // Manejo del popup
    const googleButton = document.querySelector('.social-button.google');
    const overlay = document.getElementById('overlay');
    const closeButton = document.querySelector('.close-button');
    const cancelButton = document.querySelector('.popup-button.secondary');

    // Prevenir la navegación directa al hacer clic en el botón de Google
    //googleButton.addEventListener('click', function(event) {
    //    event.preventDefault();
    //    overlay.classList.add('active');
    //});

    // Cerrar el popup
    function closePopup() {
        overlay.classList.remove('active');
    }

    //closeButton.addEventListener('click', closePopup);
    //cancelButton.addEventListener('click', closePopup);

    // Cerrar el popup al hacer clic fuera de él
    //overlay.addEventListener('click', function(event) {
    //    if (event.target === overlay) {
    //        closePopup();
    //    }
    //});

    // Cerrar el popup con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && overlay.classList.contains('active')) {
            closePopup();
        }
    });
}); 