// manejando el DOM
const btns = document.querySelectorAll(".nav-btn")
const contentBtn = document.querySelectorAll(".content")
const slidesBtn = document.querySelectorAll(".video-slide")



let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")

    });

    slidesBtn.forEach((slides) => {
        slides.classList.remove("active")

    });
    
    contentBtn.forEach((contents) => {
        contents.classList.remove("active")

    });
    btns[manual].classList.add("active");
    slidesBtn[manual].classList.add("active");
    contentBtn[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
       sliderNav(i); 
    })
})