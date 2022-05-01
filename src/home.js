/*
<div id="content" class="center"> append it to the div#content
  <h1 class="logo center">The Restaurant</h1>
  <h2 class="greet center">Best vegan restaurant ever</h2>
</div>
*/

function greet() {
  const h2 = document.createElement("h2");

  ["greet", "center"].forEach((el) => h2.classList.add(el));
  h2.textContent = "Best vegan restaurant ever";

  return h2;
}

export default function home() {
  const content = document.getElementById("content");
  content.appendChild(greet());
}
