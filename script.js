// =====================
// CINEMATIC ENGINE FINAL FIXED
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
  `همه چیز از یک نگاه شروع شد...
و دنیا برایم عوض شد...`,

  `حقیقت این است...
تو تبدیل به آرامش قلب من شدی...`,

  `از همان لحظه همه چیز تغییر کرد...

هَناسکم...
باوانَکَم...
چاوَیلِم...`,

  `پایان نیست...
این فقط شروع یک احساس ابدی است... ❤️
13 اردی‌بهشت 1405`
];

let isMusicPlaying = false;

// =====================
// START EXPERIENCE
// =====================
startBtn.addEventListener("click", startExperience);

function startExperience() {
  startBtn.style.display = "none";

  playMusic();

  showScene(1);

  scheduleScenes();
}

// =====================
// SCENE TIMELINE (SAFE & SYNC)
// =====================
function scheduleScenes() {
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
  }, 80);
}

// =====================
// SCENE SWITCHER
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
// TYPEWRITER
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
// MUSIC BUTTON
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
