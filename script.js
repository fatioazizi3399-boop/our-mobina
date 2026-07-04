// =====================
// CINEMATIC ENGINE FINAL
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
  "همه چیز از یک نگاه شروع شد...\nو دنیا برایم عوض شد...",
  "حقیقت این است...\nتو تبدیل به آرامش قلب من شدی...",
  "پایان نیست...\nاین فقط شروع یک احساس ابدی است... ❤️"
];

let currentScene = 0;
let isMusicPlaying = false;

// =====================
// START EXPERIENCE
// =====================
startBtn.addEventListener("click", startExperience);

function startExperience() {
  startBtn.style.display = "none";

  playMusic();

  showScene(1);

  setTimeout(() => showScene(2), 8000);
  setTimeout(() => showScene(3), 16000);
  setTimeout(() => showScene(4), 24000);
}

// =====================
// MUSIC CONTROL
// =====================
function playMusic() {
  music.volume = 0;

  music.play().then(() => {
    isMusicPlaying = true;
    fadeInMusic();
  }).catch(() => {
    console.log("Autoplay blocked");
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
  }, 100);
}

// =====================
// SCENE CONTROLLER
// =====================
function showScene(num) {
  scenes.forEach(s => s.classList.remove("active"));

  const scene = scenes[num - 1];
  scene.classList.add("active");

  currentScene = num;

  typeWriter(scene.querySelector(".story"), texts[num - 1]);
}

// =====================
// TYPEWRITER EFFECT
// =====================
function typeWriter(el, text) {
  if (!el) return;

  el.innerHTML = "";
  let i = 0;

  const speed = 40;

  const t = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(t);
    }
  }, speed);
}

// =====================
// MUSIC BUTTON TOGGLE
// =====================
musicBtn.addEventListener("click", () => {
  if (!isMusicPlaying) {
    music.play();
    isMusicPlaying = true;
    musicBtn.innerHTML = "🔊";
  } else {
    music.pause();
    isMusicPlaying = false;
    musicBtn.innerHTML = "🔇";
  }
});
const texts = [
  "",
  
  `این فقط یک آشنایی ساده نبود...

همه چیز از یک کودک شروع شد...
النا...

یک دختر کوچولو که بی‌خبر بود،
قرار است دو قلب را به هم برساند.

و این‌گونه بود که امین و مبینا،
بی‌هیچ برنامه‌ای،
در مسیر هم قرار گرفتند...`,

  `۱۳ اردی‌بهشت ۱۴۰۵...

روزی که ساده شروع شد،
اما دیگر هیچ‌وقت ساده باقی نماند.

اولین دیدار...

و تو با یک قرمه‌سبزی آمدی...

شاید برای تو فقط یک غذا بود،
اما برای من...

شروع واقعیِ یک احساس بود...`,

  `از همان لحظه، همه چیز تغییر کرد...

دیگر "آشنا شدن" معنایی نداشت،
چون تو تبدیل شدی به بخشی از من.

و من تو را این‌گونه صدا می‌زنم...

هَناسکم...
باوانَکَم...
چاوَیلِم...

کلماتی که فقط برای تو ساخته شدند...`,

  `این پایان نیست...

این یک شروع است.
شروعِ مسیری که اسمش امین و مبیناست...

و اگر دنیا هم بایستد،
اگر زمان هم تمام شود،

این احساس تمام نخواهد شد...

❤️ ۱۳ اردی‌بهشت ۱۴۰۵
روز شروعِ ما...`
];
