$(document).ready(function() {
    var typed = new Typed("#typed", {
        strings: [
            "با برترین مهندسین",
            "یعنی بروز ترین ابزار ها",
            "تضمین صد درصدی کار",
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 60,
    });
    $(".tab-button").on("click", "li", function() {
        let tabmenu = $(this).attr("id");
        $(this).addClass("active").siblings().removeClass("active");
        $("#" + tabmenu + "-content")
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
    $("#lightSlider").lightSlider({
        item: 4,
        rtl: true,
        loop: true,
        auto: true,
        pager: false,
        enableTouch: false,
        enableDrag: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    item: 3,
                    slideMargin: 7,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    item: 2,
                    slideMargin: 7,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMargin: 7,
                },
            },
        ],
    });

    const btn = document.querySelector(".toggle-menu");
    const list = document.querySelector("header nav ul");
    btn.addEventListener("click", function() {
        list.classList.toggle("press");
        btn.classList.toggle("press");
    });
});