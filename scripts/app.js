const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerContainer = document.getElementById("hamburger-container");
const body = document.querySelector("body");
const profile = document.getElementById("profile-container");
const taskContainer = document.getElementById("task-container");
const taskCompleted = document.getElementById("task-compeleted");
const verticalLine = document.getElementById("vertical-line");
hamburgerIcon.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("expand");
    if (hamburgerContainer.classList.contains("expand")) {
        hamburgerIcon.src = "./assets/images/mobile/light/x.svg";
        body.style.backgroundColor = "gray";
        profile.style.display = "none";
        taskContainer.style.display = "none";
        taskCompleted.style.display = "none";
        verticalLine.style.display = "none";
    } else {
        hamburgerIcon.src = "./assets/images/mobile/light/menu.svg";
        body.style.backgroundColor = "#fff";
        profile.style.display = "flex";
        taskContainer.style.display = "block";
        taskCompleted.style.display = "block";
        verticalLine.style.display = "block";
    }
})