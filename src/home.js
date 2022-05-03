import img from "./restaurant.jpg";

function greet() {
  const h2 = document.createElement("h2");

  h2.classList.add("greet", "center");
  h2.textContent = "Guiltlessly Delicious 🌱";

  return h2;
}

export default function home() {
  const image = new Image();
  image.src = img;
  image.classList.add("center", "img");

  const main = document.querySelector("main");
  main.appendChild(image);
  main.appendChild(greet());
}
