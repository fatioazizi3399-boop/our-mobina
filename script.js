// =====================
// FINAL LOVE CINEMATIC ENGINE
// Amin ❤️ Mobina
// =====================

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");

const scenes = [
  document.getElementById("scene1"),
  document.getElementById("scene2"),
  document.getElementById("scene3"),
  document.getElementById("scene4")
];

const texts = [
  "",

  `همه چیز از یک آشنایی ساده شروع شد...

النا...
یک کودک کوچک...
که بی‌خبر بود، قرار است دو قلب را به هم وصل کند...

و این‌گونه بود که امین و مبینا،
در مسیر هم قرار گرفتند...`,

  `۱۳ اردی‌بهشت ۱۴۰۵...

اولین دیدار...

امین:
همه چیز وقتی دیدمت متوقف شد...

مبینا:
و من فقط یک قرمه‌سبزی آوردم...
اما نمی‌دانستم همان لحظه...
شروع یک داستان واقعی بود...`,

  `بعد از آن روز...

امین:
تو فقط یک آدم نبودی...

تو تبدیل شدی به آرامش من...

مبینا:
و من فهمیدم...
برخی آدم‌ها برای ماندن ساخته شده‌اند...

امین:
هَناسکم...
باوانَکَم...
چاوَیلِم...`,

  `این پایان نیست...

این فقط یک شروع است...

با هم:

۱۳ اردی‌بهشت ۱۴۰۵
روز آغاز ما...

و ادامه‌ای که هیچ‌وقت تمام نمی‌شود...

❤️ Amin & Mobina ❤️`
];

let isMusicPlaying = false;

// =====================
// START EXPERIENCE
// =====================
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  playMusic();
  showScene(1);
  scheduleScenes();
});

// =====================
// TIMELINE (FIXED CINEMATIC FLOW)
// =====================
function scheduleScenes() {
  setTimeout(() => showScene(2), 8000);
  setTimeout(() => showScene(3), 16000);
  setTimeout(() => showScene(4), 24000);
}

// =====================
// MUSIC ENGINE
// =====================
function playMusic() {
  music.volume = 0;

  music.play().then(() => {
    isMusicPlaying = true;
    fadeInMusic();
  }).catch(() => {
    console.log("Music blocked until user interaction");
  });
}

function fadeInMusic() {
  let v = 0;

  const fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 80);
}

// =====================
// SCENE ENGINE
// =====================
function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));

  const scene = scenes[index - 1];
  if (!scene) return;

  scene.classList.add("active");

  const story = scene.querySelector(".story");

  if (story) {
    typeWriter(story, texts[index - 1]);
  }
}

// =====================
// TYPEWRITER ENGINE
// =====================
function typeWriter(el, text) {
  el.innerHTML = "";
  let i = 0;

  const speed = 35;

  const t = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
    } else {
      clearInterval(t);
    }
  }, speed);
}

// =====================
// MUSIC TOGGLE
// =====================
musicBtn.add
