document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        // Aquí puedes agregar código para enviar el formulario a un servidor si lo deseas.
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
