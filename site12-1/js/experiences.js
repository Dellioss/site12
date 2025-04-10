
function startCountdown(targetDateStr, elementId) {
  const targetDate = new Date(targetDateStr).getTime();
  const element = document.getElementById(elementId);

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) {
      element.innerText = "Expérience en cours";
      return;
    }
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerText = `${d} j ${h} h ${m} m ${s} s`;
  }, 1000);
}

startCountdown("2025-04-08T14:00:00", "countdown173");
startCountdown("2025-04-10T11:30:00", "countdown049");
