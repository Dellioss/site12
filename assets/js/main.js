
function skipIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  playSound("access");
  stopLoop();
}
window.onload = function() {
  playLoop();
  playSequence();
  setTimeout(skipIntro, 7000);
}
