
function skipIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}
window.onload = function() {
  setTimeout(skipIntro, 7000);
}
