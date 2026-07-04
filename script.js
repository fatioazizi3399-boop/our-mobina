// ===============================
// ساخت ستاره ها
// ===============================

const stars = document.querySelector(".stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}



// ===============================
// قلب ها
// ===============================

const hearts = document.getElementById("hearts");

let heartSpeed = 350;

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(() => {

    createHeart();

}, heartSpeed);



// ===============================
// دکمه
// ===============================

const btn = document.getElementById("startBtn");

const title = document.querySelector(".title");

const subtitle = document.querySelector(".subtitle");

btn.onclick = () => {

    title.innerHTML = "❤️ Mobina ❤️";

    subtitle.innerHTML = `

    از وقتی وارد زندگیم شدی...

    <br><br>

    دنیا قشنگ‌تر شده...

    <br><br>

    این تازه اول سورپرایزه...

    `;

    btn.innerHTML = "دوستت دارم ❤️";

    btn.style.background = "gold";

    btn.style.boxShadow = "0 0 40px gold";

};
