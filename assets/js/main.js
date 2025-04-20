
function checkPassword() {
  const input = document.getElementById('password').value;
  const error = document.getElementById('error');
  if (input.toLowerCase() === "site 12") {
    window.location.href = "index.html";
  } else {
    error.innerText = "Mot de passe incorrect.";
  }
}
