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
});

closeIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("expand");
  hamburgerMenu.style.display = "none";
  body.style.backgroundColor = "#fff";
  profile.style.display = "flex";
  taskContainer.style.display = "block";
  taskCompleted.style.display = "block";
  verticalLine.style.display = "block";
});

// !dark-mode
const toggleContainer = document.getElementById("toggle");
const toggleDark = document.getElementById("toggle-dark");
const toggleLight = document.getElementById("toggle-light");
const homeImg = document.querySelector("#side-bar li img[alt='home']");
const taskImg = document.querySelector("#side-bar li img[alt='task']");
const calendarImg = document.querySelector("#side-bar li img[alt='calendar']");
const reportImg = document.querySelector("#side-bar li img[alt='report']");
const settingImg = document.querySelector("#side-bar li img[alt='setting']");
const supportImg = document.querySelector("#side-bar li img[alt='support']");
const profileImg = document.querySelector("#side-bar li img[alt='profile']");
const lightImg = document.querySelector("#side-bar #toggle img[alt='light']");
const darkImg = document.querySelector("#side-bar #toggle img[alt='dark']");
const logoutImg = document.querySelector("#log-out img");

const lightMode = function () {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");

  toggleContainer.style.backgroundColor = "#F7F7F7";

  if (document.documentElement.classList.contains("light")) {
    toggleContainer.classList.remove("dark");
    toggleContainer.classList.add("light");
    closeIcon.src = "assets/images/mobile/light/x.svg";
    homeImg.src = "assets/images/mobile/light/home.svg";
    taskImg.src = "assets/images/mobile/light/task-square.svg";
    calendarImg.src = "assets/images/mobile/light/calendar.svg";
    reportImg.src = "assets/images/mobile/light/report.svg";
    settingImg.src = "assets/images/mobile/light/setting.svg";
    supportImg.src = "assets/images/mobile/light/24-support.svg";
    profileImg.src = "assets/images/mobile/light/profile.svg";
    lightImg.src = "assets/images/mobile/light/sun.svg";
    darkImg.src = "assets/images/mobile/light/moon.svg";
    logoutImg.src = "assets/images/mobile/light/logout.svg";
    body.style.backgroundColor = "gray";
  }
};

const darkMode = function () {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
  if (document.documentElement.classList.contains("dark")) {
    toggleContainer.classList.add("dark");
    toggleContainer.classList.remove("light");

    toggleContainer.style.backgroundColor = "#0C1B31";
    closeIcon.src = "assets/images/mobile/dark/close.svg";
    homeImg.src = "assets/images/mobile/dark/home.svg";
    taskImg.src = "assets/images/mobile/dark/task-square.svg";
    calendarImg.src = "assets/images/mobile/dark/calendar.svg";
    reportImg.src = "assets/images/mobile/dark/report.svg";
    settingImg.src = "assets/images/mobile/dark/setting.svg";
    supportImg.src = "assets/images/mobile/dark/24-support.svg";
    profileImg.src = "assets/images/mobile/dark/profile.svg";
    lightImg.src = "assets/images/mobile/dark/sun.svg";
    darkImg.src = "assets/images/mobile/dark/moon.svg";
    logoutImg.src = "assets/images/mobile/dark/logout.svg";
    body.style.backgroundColor = "#000";
  }
};

toggleDark.addEventListener("click", darkMode);
toggleLight.addEventListener("click", lightMode);

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

toggleDark.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

toggleLight.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
});



const ProfilePlaceholder = document.createComment('profile-placeholder');
profile.parentNode.insertBefore(ProfilePlaceholder, profile.nextSibling);

function moveProfile() {
    if(window.matchMedia('(min-width: 1280px)').matches) {

        // Desktop: move profile into top of hamburgerMenu
        if(!hamburgerMenu.contains(profile)) {
            hamburgerMenu.insertBefore(profile, hamburgerMenu.firstChild);

            // hamburgerMenu.style.height = 'auto';
        }
    }else {
        if(ProfilePlaceholder && !ProfilePlaceholder.contains(profile)) {
            ProfilePlaceholder.appendChild(profile); 

            // hamburgerMenu.style.height = '';
        }
    }
}

moveProfile();

window.addEventListener('resize',moveProfile);
window.addEventListener('DOMContentLoaded', moveProfile);

