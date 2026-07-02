// ===============================
// ПОЯВЛЕНИЕ БЛОКОВ
// ===============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(80px)";
  section.style.transition = "1s";
  observer.observe(section);
});

// ===============================
// ПЛАВНОЕ ПОЯВЛЕНИЕ КНОПКИ
// ===============================
const button = document.querySelector(".button");

setTimeout(() => {
  button.style.opacity = "1";
  button.style.transform = "translateY(0)";
}, 700);

button.style.opacity = "0";
button.style.transform = "translateY(30px)";
button.style.transition = "1s";