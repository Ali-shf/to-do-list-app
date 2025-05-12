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

const taskCounter = document.getElementById("task-counter");
const startTask = document.getElementById("start-task");
const startTaskBtn = document.getElementById("start-task-btn");
const addTaskForm = document.getElementById("task-form");
const taskTagBtn = document.querySelector("#task-tag button");
const taskTags = document.getElementById("task-tags");
let inputTitle = document.querySelector("input[name='task-title']");
let inputDesc = document.querySelector("input[name='task-desc']");
const taskList = document.getElementById("task-list");


let selectedTag = null;
let counter = 0;


taskCounter.innerText = "تسکی برای امروز نداری";


startTaskBtn.addEventListener("click", () => {
  addTaskForm.style.display = "block";
  startTask.style.display = "none";
});


taskTagBtn.addEventListener("click", (e) => {
  e.preventDefault();
  taskTags.style.display = "flex";
});


taskTags.addEventListener("click", (e) => {
  const tag = e.target.closest("#tag-top, #tag-mid, #tag-bottom");
  if (!tag) return;

  
  selectedTag = tag.cloneNode(true);

  
  taskTagBtn.innerHTML = "";
  taskTagBtn.appendChild(selectedTag);
  taskTags.style.display = "none";
});


addTaskForm.addEventListener("submit", (e) => {
  counter += 1;
  taskCounter.innerText =  `${counter} تسک را باید انجام دهید.`;
  
  e.preventDefault();
  addTaskForm.style.display = "none";

  const titleValue = inputTitle.value;
  const descValue = inputDesc.value;

  const listItem = document.createElement("li");
  listItem.classList.add("task", "relative");

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
    <div class="dropdown">
      <button class="dropdown-btn">
        <img 
          src="./assets/images/desktop/light/dropdown.svg" alt="dropdown" 
          class="absolute top-6 left-6 cursor-pointer"
        />
      </button>
      <div id="myDropdown" class="dropdown-menu hidden flex flex-col gap-2 w-20 h-9 absolute top-8 left-0 bg-white border rounded z-10 text-sm
        shadow-[0_20px_24px_rgba(20,20,25,0.06)]">
        <button class="flex items-center w-6 h-6 text-left px-2 py-1 hover:bg-red-100 delete-btn">
          <img 
            src="./assets/images/mobile/light/tabler_trash-x.svg" alt="dropdown" 
            class="cursor-pointer"
          />
        </button>
        <div class="border border-[#EBEDEF] w-5 rotate-90"></div>
        <button class="flex items-center w-6 h-6 text-left px-2 py-1 hover:bg-gray-100 edit-btn">
          <img 
            src="./assets/images/mobile/light/tabler_edit.svg" alt="dropdown" 
            class=" cursor-pointer"
          />
        </button>
      </div>  
    </div>
  `;

  if (selectedTag) {

    if (selectedTag.id === "tag-top") listItem.classList.add("priority-1");
    if (selectedTag.id === "tag-mid") listItem.classList.add("priority-2");
    if (selectedTag.id === "tag-bottom") listItem.classList.add("priority-3");

    const tagClone = selectedTag.cloneNode(true);
    listItem.querySelector(".task-check").appendChild(tagClone);

  requestAnimationFrame(() => {
    const computedColor = window.getComputedStyle(tagClone).color;
    listItem.querySelector("#vertical-line").style.backgroundColor = computedColor;
  });
}

else {
  listItem.classList.add("priority-4");
}


  taskList.appendChild(listItem);


  // Toggle dropdown menu
  const dropdownBtn = listItem.querySelector(".dropdown-btn");
  const dropdownMenu = listItem.querySelector(".dropdown-menu");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");

    // if (!dropdownMenu.classList.contains("hidden")) {
    //   dropdownMenu.classList.add("flex-col","gap-2");
    // } else {
    //   dropdownMenu.classList.remove("flex-col","gap-2");
    // }
  });

  // Delete functionality
  dropdownMenu.querySelector(".delete-btn").addEventListener("click", () => {
    listItem.remove();
  });

  // Edit functionality
  dropdownMenu.querySelector(".edit-btn").addEventListener("click", () => {
    const titleSpan = listItem.querySelector(".task-check span");
    const descSpan = listItem.querySelector(".span-desc span");

    // Create a new form element
    const form = document.createElement("form");
    form.className = "edit-form flex flex-col gap-2 mt-4";

    form.innerHTML = `
      <input 
        type="text" 
        class="border border-gray-300 px-2 py-1 rounded task-title-input" 
        value="${titleSpan?.textContent.trim() || ''}" 
        required 
      />
      <textarea 
        class="border border-gray-300 px-2 py-1 rounded task-desc-input" 
        rows="2"
        required
      >${descSpan?.textContent.trim() || ''}</textarea>
      <button type="submit" class="bg-blue-500 text-white rounded px-3 py-1 self-start">
        ذخیره
      </button>
    `;

    // Insert the form after the task
    listItem.insertAdjacentElement("afterend", form);

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTitle = form.querySelector(".task-title-input").value.trim();
      const newDesc = form.querySelector(".task-desc-input").value.trim();

      // Update task
      titleSpan.textContent = newTitle;
      descSpan.textContent = newDesc;

      // Remove the form
      form.remove();
    });
  });


  const tasks = [...taskList.children];
  
  
  tasks.sort((a, b) => {
    const getPriority = (element) => {
      if (element.classList.contains("priority-1")) return 1;
      if (element.classList.contains("priority-2")) return 2;
      if (element.classList.contains("priority-3")) return 3;
      return 4;
    };
    return getPriority(a) - getPriority(b);
  });
  tasks.forEach(task => taskList.appendChild(task));

  // Reset inputs and tag
  inputTitle.value = "";
  inputDesc.value = "";
  selectedTag = null;
  taskTagBtn.innerHTML = `
    <img src="./assets/images/desktop/light/tag-right.svg" alt="task" />
    <span class="text-[#AFAEB2]">تگ ها</span>
  `;
});



