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
  profile.style.display = "none";
  taskContainer.style.display = "none";
  taskCompleted.style.display = "none";
  verticalLine.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("expand");
  hamburgerMenu.style.display = "none";
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
    localStorage.setItem("theme", "light");

    toggleContainer.style.backgroundColor = "#F7F7F7";
    toggleContainer.classList.remove("dark");
    toggleContainer.classList.add("light");
    closeIcon.src = "./assets/images/mobile/light/x.svg";
    homeImg.src = "./assets/images/mobile/light/home.svg";
    taskImg.src = "./assets/images/mobile/light/task-square.svg";
    calendarImg.src = "./assets/images/mobile/light/calendar.svg";
    reportImg.src = "./assets/images/mobile/light/report.svg";
    settingImg.src = "./assets/images/mobile/light/setting.svg";
    supportImg.src = "./assets/images/mobile/light/24-support.svg";
    profileImg.src = "./assets/images/mobile/light/profile.svg";
    lightImg.src = "./assets/images/mobile/light/sun.svg";
    darkImg.src = "./assets/images/mobile/light/moon.svg";
    logoutImg.src = "/assets/images/mobile/light/logout.svg";
    hamburgerIcon.src = "./assets/images/mobile/light/menu.svg";
    if (hamburgerMenu.classList.contains("expand")) {
        body.style.backgroundColor = "gray";
    } else {
        body.style.backgroundColor = "#fff";
    }
};

const darkMode = function () {

    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");

    toggleContainer.classList.add("dark");
    toggleContainer.classList.remove("light");
    toggleContainer.style.backgroundColor = "#0C1B31";
    closeIcon.src = "./assets/images/mobile/dark/close.svg";
    homeImg.src = "./assets/images/mobile/dark/home.svg";
    taskImg.src = "./assets/images/mobile/dark/task-square.svg";
    calendarImg.src = "./assets/images/mobile/dark/calendar.svg";
    reportImg.src = "./assets/images/mobile/dark/report.svg";
    settingImg.src = "./assets/images/mobile/dark/setting.svg";
    supportImg.src = "./assets/images/mobile/dark/24-support.svg";
    profileImg.src = "./assets/images/mobile/dark/profile.svg";
    lightImg.src = "./assets/images/mobile/dark/sun.svg";
    darkImg.src = "./assets/images/mobile/dark/moon.svg";
    logoutImg.src = "./assets/images/mobile/dark/logout.svg";
    hamburgerIcon.src = "./assets/images/mobile/dark/menu.svg";
};


toggleDark.addEventListener("click", darkMode);
toggleLight.addEventListener("click", lightMode);



toggleDark.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

toggleLight.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
});


// !Task-manager

const startTask = document.getElementById("start-task");
const startTaskBtn = document.getElementById("start-task-btn");
const addTaskForm = document.getElementById("task-form");
const taskTagBtn = document.querySelector("#task-form #task-tag");
const taskTags = document.getElementById("task-tags");
let inputTitle = document.querySelector("input[name='task-title']");
let inputDesc = document.querySelector("input[name='task-desc']");
const taskList = document.getElementById("task-list");


function addTask(e) {
  startTask.style.display = "none";
  addTaskForm.style.display  = "block";
  let clickedTag;
  taskTagBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskTags.style.display = "flex";
    clickedTag = e.target.closest("#tag-top, #tag-mid, #tag-bottom"); 
    if(!clickedTag) return  
    taskTagBtn.innerHTML = "";
    taskTagBtn.appendChild(clickedTag);
  });
  
  
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTaskForm.style.display = "none";
    const titleValue = inputTitle.value;
    const descValue = inputTitle.value;
    const listItem = document.createElement("li");
    listItem.classList.add("task");
    listItem.classList.add("relative");
    taskList.appendChild(listItem);
    listItem.innerHTML = `
    <div class="absolute top-[15px] bottom-[15px] right-0 w-[4px] rounded-l-full" id="vertical-line"></div>
      <div class="wrapper flex flex-col gap-[10px] py-4 pr-5 border border-[#E9E9E9] rounded-[12px] mt-4">
        <div class="task-check flex gap-3">
          <input type="checkbox" />
          <span class="text-[#242424] font-bold">${titleValue}</span>
        </div>
        <div class="span-desc">
          <span class="text-[#727272] text-[14px]">${descValue}</span>
        </div>
      </div>
      <img 
        src="./assets/images/desktop/light/dropdown.svg" alt="dropdown" 
        class="absolute top-6 left-6 cursor-pointer"
        />
    `
    document.querySelector(".task-check").appendChild(clickedTag);
    document.querySelector(".task #vertical-line").style.backgroundColor = window.getComputedStyle(clickedTag).color;
    
  })
}

// Event listener to add a new task and edit, delete a task
startTaskBtn.addEventListener("click", addTask);