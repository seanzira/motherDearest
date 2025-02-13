document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.card');
  
    card.addEventListener('mouseover', () => {
      card.style.transform = "rotateY(10deg)";
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = "rotateY(0deg)";
    });
  });
  