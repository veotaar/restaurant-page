export default function menu() {
  const main = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("center");

  const menuItems = document.createElement("h2");
  menuItems.textContent = "Menu loaded from menu.js module";

  div.appendChild(menuItems);

  main.appendChild(div);
}
