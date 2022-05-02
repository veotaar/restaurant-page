import { createNavItem } from "./utils";

export default function navigation() {
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
