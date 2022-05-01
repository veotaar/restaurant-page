import "open-props/style";
import "open-props/normalize";
import "./style.css";

import { createNavItem } from "./utils";

import home from "./home";
import menu from "./menu";
import contact from "./contact";

const content = document.getElementById("content");

function logo() {
  const h1 = document.createElement("h1");

  ["logo", "center"].forEach((el) => h1.classList.add(el));
  h1.textContent = "The Restaurant";

  return h1;
}

/*
<nav class="nav">
  <ul class="center">
    <li class="nav__item active">Home</li>
    <li class="nav__item">About</li>
    <li class="nav__item">Contact</li>
  </ul>
</nav>
*/

function navigation() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const ul = document.createElement("ul");
  ul.classList.add("center");

  const homeTab = createNavItem("Home", true);
  const menuTab = createNavItem("Menu");
  const contactTab = createNavItem("Contact");

  // add nav items to <ul>
  [homeTab, menuTab, contactTab].forEach((el) => ul.appendChild(el));

  nav.appendChild(ul);

  return nav;
}

const main = document.createElement("main");

content.appendChild(logo());
content.appendChild(navigation());
content.appendChild(main);

// Tab switching
const nav = document.querySelector(".nav");
nav.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav__item")) return;
  const { tab } = e.target.dataset;

  switch (tab) {
    case "home":
      main.innerHTML = "";
      home();
      break;
    case "menu":
      main.innerHTML = "";
      menu();
      break;
    case "contact":
      main.innerHTML = "";
      contact();
      break;
  }

  console.log(tab);
});

home();
