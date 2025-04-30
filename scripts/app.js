// !hamburger-menu
const hamburgerImg = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerImg.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("expand");
    if (hamburgerMenu.classList.contains("expand")) {
        hamburgerImg.src = "./assets/images/mobile/light/x.svg";
    } else {
        hamburgerImg.src = "./assets/images/mobile/light/menu.svg";
    }
})
