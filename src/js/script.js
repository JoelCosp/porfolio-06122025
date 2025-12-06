// ----- Mobile Menu -----
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close navbar when any link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ----- Theme Switch -----
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Save theme on load + default dark mode
let currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
  currentTheme = "dark"; // default mode
  localStorage.setItem("theme", "dark");
}

document.documentElement.setAttribute("data-theme", currentTheme);
toggleSwitch.checked = currentTheme === "dark";

// ----- Date -----
let myDate = document.querySelector("#datee");
myDate.innerHTML = new Date().getFullYear();
