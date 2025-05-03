// !hamburger-menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeIcon = document.querySelector("#hamburger-menu #menu-title img");
const body = document.querySelector("body");
const profile = document.getElementById("profile-container");
const taskContainer = document.getElementById("task-container");
const taskCompleted = document.getElementById("task-compeleted");
const verticalLine = document.getElementById("vertical-line");
hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.add("expand");
    hamburgerMenu.style.display = "block";
    body.style.backgroundColor = "gray";
    profile.style.display = "none";
    taskContainer.style.display = "none";
    taskCompleted.style.display = "none";
    verticalLine.style.display = "none";
})

closeIcon.addEventListener("click", () => {
    hamburgerMenu.classList.remove("expand");
    hamburgerMenu.style.display = "none";
    body.style.backgroundColor = "#fff";
    profile.style.display = "flex";
    taskContainer.style.display = "block";
    taskCompleted.style.display = "block";
    verticalLine.style.display = "block";
})

// !dark-mode

const darkBtn = document.getElementById("dark");
const darkMode = function () {
    document.documentElement.classList.toggle("dark");
}

darkBtn.addEventListener("click", darkMode);