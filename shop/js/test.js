const slides = document.querySelector(".slider-item").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const totalSlides = slides.length;

let index = 0;
let duration = 6000;

next.onclick = () => slide("next");

prev.onclick = () => slide("prev");

function slide(dir) {
    progress();

    if (dir == "next") {
        if (index == totalSlides - 1) {
            index = 0;
        } else index++;
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else index--;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");

    clearInterval(timer);
    timer = setInterval(autoSlide, duration);
}

function progress() {
    
    document.querySelector(".progress").innerHTML = "";
    div = document.createElement("div");
    div.style.width = "0";
    div.style.height = "4px";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.backgroundColor = "#c00";
    div.style.animation = "progress " + duration / 1000 + "s linear";
    document.querySelector(".progress").appendChild(div);
}

progress();

function autoSlide() {
    slide("next");
}

let timer = setInterval(autoSlide, duration);