// ستاره ها
const stars = document.querySelector(".stars");

for(let i=0;i<120;i++){
    const s=document.createElement("div");
    s.className="star";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    s.style.animationDelay=Math.random()*3+"s";
    stars.appendChild(s);
}

// قلب ها
const hearts=document.getElementById("hearts");

function createHeart(){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(15+Math.random()*25)+"px";
    h.style.animationDuration=(4+Math.random()*3)+"s";
    hearts.appendChild(h);

    setTimeout(()=>h.remove(),7000);
}

setInterval(createHeart,300);

// صحنه ها
const scenes=document.querySelectorAll(".scene");
let current=0;

function showScene(i){
    scenes.forEach(s=>s.classList.remove("active"));
    scenes[i].classList.add("active");
}

// تایپ متن
function typeText(element,text,speed=50){
    element.innerHTML="";
    let i=0;

    function typing(){
        if(i<text.length){
            element.innerHTML+=text[i];
            i++;
            setTimeout(typing,speed);
        }
    }

    typing();
}

// دکمه شروع
document.getElementById("startBtn").onclick=()=>{
    current=1;
    showScene(current);

    setTimeout(()=>{
        typeText(document.querySelector("#scene2 .story"),
        "از وقتی وارد زندگیم شدی، همه چیز تغییر کرد... حتی سکوت هم معنی دیگه‌ای گرفت...");
    },800);

    setTimeout(()=>{
        current=2;
        showScene(current);

        typeText(document.querySelector("#scene3 .story"),
        "تو فقط یک اسم نیستی... تو یک احساس واقعی هستی که هیچ وقت تموم نمی‌شه...");
    },6000);

    setTimeout(()=>{
        current=3;
        showScene(current);

        typeText(document.querySelector("#scene4 .story"),
        "و این داستان... تازه شروعشه ❤️");
    },12000);
};
// ===============================
// موزیک
// ===============================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

function toggleMusic(){
    if(isPlaying){
        music.pause();
        musicBtn.innerHTML = "🔇";
    }else{
        music.play();
        musicBtn.innerHTML = "🔊";
    }
    isPlaying = !isPlaying;
}

musicBtn.onclick = toggleMusic;

// شروع خودکار بعد از کلیک (مهم برای مرورگرها)
document.body.addEventListener("click", ()=>{
    if(!isPlaying){
        music.play().catch(()=>{});
        isPlaying = true;
        musicBtn.innerHTML = "🔊";
    }
}, {once:true});


// ===============================
// شروع سینمایی + موزیک هماهنگ
// ===============================
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    music.play().catch(()=>{});
    isPlaying = true;

    current = 1;
    showScene(current);

    setTimeout(()=>{
        typeText(document.querySelector("#scene2 .story"),
        "از لحظه‌ای که دیدمت، دنیا آروم‌تر شد... انگار همه چیز معنی پیدا کرد...");
    },800);

    setTimeout(()=>{
        current = 2;
        showScene(current);

        typeText(document.querySelector("#scene3 .story"),
        "تو فقط یک اسم نیستی... تو دلیل تپش این قلبی ❤️");
    },6000);

    setTimeout(()=>{
        current = 3;
        showScene(current);

        typeText(document.querySelector("#scene4 .story"),
        "و این فقط شروع یک داستان عاشقانه واقعی است...");
    },12000);
};
