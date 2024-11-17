const params = new URLSearchParams(window.location.search);
const user = params.get("user");

if (user) {
  document.getElementById("adminUser").textContent = user;
} else {
  document.getElementById("adminUser").textContent = "Administrador";
}
