const slides = document.querySelector(".slider-item").children;
const totalSlides = slides.length;
const next = document.querySelector(".next");
const prev = document.querySelector('.controls .prev');

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
    div.style.width = 0;
    div.style.height = "4px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.top = 0;
    div.style.left = 0;
    div.style.animation = "progress " + duration / 1000 + "s linear";
    document.querySelector(".progress").appendChild(div);

}

progress();

function autoSlide() {
    slide("next");
}

let timer = setInterval(autoSlide, duration);

// search box

const search_box = document.querySelector('.search-box');
const search = document.querySelector('.search');
const closeIcon = document.querySelector('.search-box .close');
const closeIconMenu = document.querySelector('.menu ul .close');

search.addEventListener('click', function() {
    search_box.classList.toggle('show');

});

closeIcon.onclick = function() {
    search_box.classList.remove('show');
};

// mega menu

const mega_menu_list = document.querySelector('#drop-mega-menu');
const mega_menu = document.querySelector('.mega-menu');
mega_menu_list.addEventListener('click', function() {
    mega_menu.classList.toggle('active');
});


//menu
const menu = document.querySelector('.menu ul');

closeIconMenu.addEventListener('click', function() {
    menu.style.right = '-313px';
})

const hamburgur = document.querySelector('.hamburgur');
hamburgur.addEventListener('click', function() {
    menu.style.right = 0;
});