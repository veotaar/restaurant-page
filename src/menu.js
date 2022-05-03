import { menuItem } from "./utils";

export default function menu() {
  const main = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("center");

  div.appendChild(
    menuItem("Teriyaki Tofu", "Onion, garlic, teriyaki sauce...", 10)
  );
  div.appendChild(menuItem("Seitan Steak", "VWG, lentils, soy sauce...", 15));
  div.appendChild(menuItem("Seitan Burger", "with fries...", 15));
  div.appendChild(menuItem("Falafel", "with tahini sauce...", 12));

  main.appendChild(div);
}
