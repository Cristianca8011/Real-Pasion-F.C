function validarFormulario(event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirmarContrasena = document.getElementById('confirmarContrasena').value;

    // Obtener los elementos de error
    var nombreError = document.getElementById('nombreError');
    var correoError = document.getElementById('correoError');
    var contrasenaError = document.getElementById('contrasenaError');
    var confirmarContrasenaError = document.getElementById('confirmarContrasenaError');
    var resultado = document.getElementById('resultado');
    var formularioEnviadoExitosamente = document.getElementById('FormularioEnviadoExitosamente');

    // Limpiar mensajes de error previos
    nombreError.textContent = '';
    correoError.textContent = '';
    contrasenaError.textContent = '';
    confirmarContrasenaError.textContent = '';
    resultado.textContent = '';
    formularioEnviadoExitosamente.textContent = '';

    // Validación de campos
    var esValido = true;

    if (nombre.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio.';
        esValido = false;
    }

    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.trim() === '') {
        correoError.textContent = 'El correo electrónico es obligatorio.';
        esValido = false;
    } else if (!correoRegex.test(correo)) {
        correoError.textContent = 'El formato del correo electrónico no es válido.';
        esValido = false;
    }

    if (contrasena.trim() === '') {
        contrasenaError.textContent = 'La contraseña es obligatoria.';
        esValido = false;
    } else if (contrasena.length < 8) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        esValido = false;
    }

    if (confirmarContrasena.trim() === '') {
        confirmarContrasenaError.textContent = 'Debe confirmar la contraseña.';
        esValido = false;
    } else if (contrasena !== confirmarContrasena) {
        confirmarContrasenaError.textContent = 'Las contraseñas no coinciden.';
        esValido = false;
    }

    if (esValido) {
        resultado.textContent = '¡Formulario enviado con éxito!';
        resultado.classList.remove('error');
        resultado.classList.add('success');
        formularioEnviadoExitosamente.textContent = '';
    } else {
        resultado.textContent = '';
       
    }

    return esValido;
}
