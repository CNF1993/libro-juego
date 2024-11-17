document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "mel" && password === "123") {
      window.location.href = `admin.html?user=${username}`;
    } else {
      document.getElementById("loginError").textContent = "Usuario o contraseña incorrectos.";
    }
  });
  