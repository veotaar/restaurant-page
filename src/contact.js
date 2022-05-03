import img from "./location.png";

export default function contact() {
  const div = document.createElement("div");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const tel = document.createElement("p");
  tel.classList.add("center", "contact-info__item");
  tel.innerText = "☎️ 123456789";

  const address = document.createElement("p");
  address.classList.add("center", "contact-info__item");
  address.innerText = "📍 Fake st. Valencia, Spain";

  contactInfo.appendChild(tel);
  contactInfo.appendChild(address);

  const image = new Image();
  image.src = img;
  image.classList.add("center", "img", "location-img");

  const main = document.querySelector("main");

  div.appendChild(contactInfo);
  div.appendChild(image);

  main.appendChild(div);
}
