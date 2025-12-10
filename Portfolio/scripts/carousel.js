document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const totalCards = cards.length;
  const theta = (2 * Math.PI) / totalCards;
  const radius = 400;

  function arrangeCards() {
    cards.forEach((card, index) => {
      const angle = theta * index;
      card.style.transform = `translateX(-50%) rotateY(${angle}rad) translateZ(${radius}px)`;
    });
    carousel.style.transform = `translateZ(-${radius}px) rotateY(${-currentIndex * theta}rad)`;
  }

  arrangeCards();

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    arrangeCards();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    arrangeCards();
  });

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentIndex = index;
      arrangeCards();
    });
  });

  // Flip on double click
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
