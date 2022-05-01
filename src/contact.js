export default function contact() {
  const main = document.querySelector("main");

  const div = document.createElement("div");

  const contactItems = document.createElement("h2");
  contactItems.textContent = "Contacts loaded from contact.js module";

  div.appendChild(contactItems);

  main.appendChild(div);
}
