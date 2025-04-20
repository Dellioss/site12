
const output = document.getElementById("output");
const commandInput = document.getElementById("command");
let history = [];
let index = 0;

function bootSystem() {
  const bootLines = [
    "[BOOT] Initialisation du terminal sécurisé...",
    "[OK] Chargement des modules SCP...",
    "[OK] Rétablissement du lien avec le Site-12...",
    "[OK] Accès local autorisé - Clearance Niveau 3",
    "[TERMINAL] Système prêt. Tapez 'help' pour commencer.\n"
  ];
  let i = 0;
  const interval = setInterval(() => {
    if (i < bootLines.length) {
      appendLine(bootLines[i]);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 500);
}

function handleCommand(event) {
  if (event.key === "Enter") {
    const command = commandInput.value.trim().toLowerCase();
    history.push(command);
    index = history.length;
    appendLine("> " + command);
    processCommand(command);
    commandInput.value = "";
  } else if (event.key === "ArrowUp") {
    if (index > 0) {
      index--;
      commandInput.value = history[index];
    }
  } else if (event.key === "ArrowDown") {
    if (index < history.length - 1) {
      index++;
      commandInput.value = history[index];
    } else {
      commandInput.value = "";
    }
  }
}

function processCommand(cmd) {
  switch(cmd) {
    case "help":
      appendLine("Commandes disponibles :\nhelp, clear, connect site12, scp-173, scp-049, logs, reboot, status site12, whoami, alert, shutdown, zone, access level, history, override");
      break;
    case "clear":
      output.innerHTML = "";
      break;
    case "connect site12":
      appendLine("Connexion au réseau du Site-12...\nConnexion sécurisée établie.\nAgent authentifié.");
      break;
    case "scp-173":
      appendLine("SCP-173 : Entité hostile en béton animée. Ne pas briser le contact visuel.");
      break;
    case "scp-049":
      appendLine("SCP-049 : Apparence humanoïde. Déclare être capable de 'guérir la peste'.");
      break;
    case "logs":
      appendLine("[12:45] Accès autorisé : Agent ███████\n[12:48] SCP-███ transféré en Zone-3\n[12:53] Alarme confinement temporairement désactivée.");
      break;
    case "reboot":
      appendLine("[REBOOT] Redémarrage en cours...\n[OK] Système réinitialisé.");
      break;
    case "status site12":
      appendLine("Énergie : STABLE\nConfinement : ACTIF\nRéseau : OPÉRATIONNEL");
      break;
    case "whoami":
      appendLine("Agent autorisé : CLASSIFIED");
      break;
    case "alert":
      appendLine("⚠️ ALERTE CONFINEMENT : FUITE EN COURS EN ZONE-4 ⚠️");
      break;
    case "access level":
      appendLine("Clearance Level : 3+");
      break;
    case "zone":
      appendLine("Zones disponibles : Entrée, Quartier Classe D, Laboratoires, Salle de confinement, Centre de commandement");
      break;
    case "history":
      appendLine(history.join("\n"));
      break;
    case "override":
      appendLine("⚠️ Override échoué : Autorisation O5 requise.");
      break;
    case "shutdown":
      appendLine("Fermeture du terminal...\n[FIN DE TRANSMISSION]");
      break;
    default:
      appendLine("Commande inconnue : " + cmd + "\nTapez 'help' pour la liste.");
      break;
  }
}

function appendLine(text) {
  output.innerHTML += text + "\n";
  output.scrollTop = output.scrollHeight;
}
