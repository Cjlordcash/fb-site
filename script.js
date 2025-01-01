let settingsMenu = document.querySelector(".settings-menu");

let darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("on");
  document.body.classList.toggle("dark-theme-mood");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("on");
  document.body.classList.remove("dark-theme-mood");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("on");
  document.body.classList.add("dark-theme-mood");
} else {
  localStorage.setItem("theme", "light");
}
