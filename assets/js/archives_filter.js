
function filterSCP(type) {
  const cards = document.querySelectorAll('.scp-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(type) ? 'block' : 'none';
    }
  });
}
