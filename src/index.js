import "open-props/style";
import "open-props/normalize";
import "./style.css";

import { activateTab } from "./utils";

import logo from "./logo";
import navigation from "./navigation";

import home from "./home";
import menu from "./menu";
import contact from "./contact";

const content = document.getElementById("content");
const main = document.createElement("main");

content.appendChild(logo());
content.appendChild(navigation());
content.appendChild(main);

/////////////////////////
// Tab switching
const nav = document.querySelector(".nav");

nav.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav__item")) return;

  const { tab } = e.target.dataset;
  activateTab(tab);

  main.innerText = "";

  switch (tab) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "contact":
      contact();
      break;
  }
});
/////////////////////////

home();
