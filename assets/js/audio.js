
let loopAudio = new Audio("assets/sounds/loop_scan.mp3");
loopAudio.loop = true;
let enabled = true;

function playSound(type) {
  if (!enabled) return;
  let sound;
  if (type === "bip") sound = new Audio("assets/sounds/bip.mp3");
  if (type === "access") sound = new Audio("assets/sounds/access_granted.mp3");
  if (sound) sound.play();
}

function playSequence() {
  setTimeout(() => playSound("bip"), 1000);
  setTimeout(() => playSound("bip"), 3000);
  setTimeout(() => playSound("bip"), 5000);
}

function playLoop() {
  if (enabled) loopAudio.play();
}

function stopLoop() {
  loopAudio.pause();
}

function toggleAudio() {
  enabled = !enabled;
  if (enabled) {
    playLoop();
  } else {
    stopLoop();
  }
}
