import "open-props/style";
import "open-props/normalize";
import "./style.css";

import { createNavItem } from "./utils";

import home from "./home";

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

  [homeTab, menuTab, contactTab].forEach((el) => ul.appendChild(el));

  nav.appendChild(ul);

  return nav;
}

content.appendChild(logo());
content.appendChild(navigation());

home();
