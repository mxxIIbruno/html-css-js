let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSliders = slider.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function () {
    if (currentSlide == 0) {
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSliders - currentSlide) * -100}vh`;
});

slider.querySelector(".controls .down").addEventListener("click", function () {
    if (currentSlide == totalSliders) {
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSliders - currentSlide) * -100}vh`;
});
