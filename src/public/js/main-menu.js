// DOM menu
const menuBtn = document.querySelector(".menu-btn") 
// DOM navigation
const navigationBtn = document.querySelector(".navigation")
 
// Event click del btn menu 
menuBtn.addEventListener("click", () => {
    
    menuBtn.classList.toggle("active")
    navigationBtn.classList.toggle("active")

})

