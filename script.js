javascript
// ===============================
// ТАЙМЕР ДО СВАДЬБЫ
// ===============================

const weddingDate = new Date("July 18, 2026 15:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("timer").innerHTML =
        "<h2>Сегодня наш счастливый день! ❤️</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateTimer();

setInterval(updateTimer,1000);

// ===============================
// ПОЯВЛЕНИЕ БЛОКОВ
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// ===============================
// ПЛАВНОЕ ПОКАЧИВАНИЕ ФОТО
// ===============================

const photo = document.querySelector(".main-photo");

let angle = 0;

setInterval(()=>{

angle += 0.03;

photo.style.transform =
`rotate(${Math.sin(angle)*2}deg)`;

},30);

// ===============================
// КРАСИВАЯ ПРОКРУТКА
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// ПЛАВНОЕ ПОЯВЛЕНИЕ КНОПКИ
// ===============================

const button = document.querySelector(".button");

setTimeout(()=>{

button.style.opacity="1";

button.style.transform="translateY(0)";

},700);

button.style.opacity="0";

button.style.transform="translateY(30px)";

button.style.transition="1s";