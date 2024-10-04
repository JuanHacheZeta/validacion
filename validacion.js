// Función separada para validar el número
function validarNumero(numero) {
    const regex = /^(1[5-9]|2[0-4])84\d{4}$/;
    return regex.test(numero);
}


document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = document.getElementById('numero').value;
    const mensaje = document.getElementById('mensaje');

    if (validarNumero(numero)) {
        mensaje.textContent = "El número es válido.";
        mensaje.className = "success";
        
    } else {
        mensaje.textContent = "Número inválido";
        mensaje.className = "error";
    }
});