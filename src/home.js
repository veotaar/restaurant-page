function greet() {
  const h2 = document.createElement("h2");

  ["greet", "center"].forEach((el) => h2.classList.add(el));
  h2.textContent = "Best vegan restaurant ever";

  return h2;
}

export default function home() {
  const main = document.querySelector("main");
  main.appendChild(greet());
}
