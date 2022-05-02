export default function logo() {
  const h1 = document.createElement("h1");

  ["logo", "center"].forEach((el) => h1.classList.add(el));
  h1.textContent = "The Restaurant";

  return h1;
}
