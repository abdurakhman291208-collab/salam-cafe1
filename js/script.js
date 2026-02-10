let restaurantName = "SALAM Cafe";
let deliveryPrice = 1000;
let isOpen = true;

document.addEventListener("DOMContentLoaded", () => {

  // Статус ресторана
  const statusEl = document.getElementById("status");
  if (statusEl) {
    statusEl.textContent = isOpen
      ? "Сегодня мы открыты с 12:00 до 00:00"
      : "Сегодня ресторан закрыт";
  }

  // Карточки
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // Анимация появления секций
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
  });

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
        sec.style.transition = "0.6s ease";
      }
    });
  });

});

// Функция для требований
function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  if (total > 5000) total -= 500;
  return total;
}

// Форма
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const agree = document.getElementById("agree").checked;

    if (!name || !email || !phone) {
      alert("Заполните все поля");
      return;
    }

    if (!email.includes("@")) {
      alert("Некорректный email");
      return;
    }

    if (!agree) {
      alert("Подтвердите согласие");
      return;
    }

    alert("Спасибо! Мы свяжемся с вами.");
    form.reset();
  });
}
