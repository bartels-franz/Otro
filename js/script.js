// Validación de usuario y contraseña
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Credenciales válidas
  const validUsername = "bartels";
  const validPassword = "electiva2";

  // Obtener valores del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Verificar si las credenciales son correctas
  if (username === validUsername && password === validPassword) {
    // Redirigir al formulario de registro
    window.location.href = "register.html";
  } else {
    // Mostrar mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
  }
});