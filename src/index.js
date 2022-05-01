import "open-props/style";
import "open-props/normalize";
import "./style.css";

import home from "./home";

const content = document.getElementById("content");

function logo() {
  const h1 = document.createElement("h1");

  ["logo", "center"].forEach((el) => h1.classList.add(el));
  h1.textContent = "The Restaurant";

  return h1;
}

content.appendChild(logo());

home();
