index = 0;
items = $(".work-item").length;

$(document).ready(function() {
    $(".work-item-inner").click(function() {
        index = $(this).parent().index();
        $(".light-box").addClass("open");
        lightBoxSlideShow();
    });

    $(".lightbox-control .prev").click(function() {
        if (index == 0) {
            index = items - 1;
        } else index--;
        lightBoxSlideShow();
    });

    $(".lightbox-control .next").click(function() {
        if (index == items - 1) {
            index = 0;
        } else index++;
        lightBoxSlideShow();
    });

    $(".light-box .close").click(function() {
        $(".light-box").removeClass("open");
    });

    $(".light-box").click(function(event) {
        if ($(event.target).hasClass("light-box")) {
            $(this).removeClass("open");
        }
    });

    function lightBoxSlideShow() {
        const imgSrc = $(".work-item").eq(index).find("img").attr("data-target");
        const category = $(".work-item").eq(index).find("p").html();

        $(".lightbox-img").attr("src", imgSrc);
        $(".lightbox-category").html(category);
        $(".lightbox-counter").html(items + "/" + (index + 1));
    }
});