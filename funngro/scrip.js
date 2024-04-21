let fa_bars = document.querySelector(".fa-bars");
let fa_bar = document.querySelector(".fa-bar");

let fa_xmark = document.querySelector(".fa-xmark");
let fa_mark = document.querySelector(".fa-mark");

let slide_bar = document.querySelector(".menu-items ul");

fa_mark.style.display = "none";



fa_bars.addEventListener("click", () => {
    fa_mark.style.display = "block";
    fa_bar.style.display = "none"
    slide_bar.style.transform = "translateX(100vw)";
});


fa_mark.addEventListener("click", () => {
    fa_mark.style.display = "none";
    fa_bar.style.display = "block"
    slide_bar.style.transform = "translateX(-100vw)";
});