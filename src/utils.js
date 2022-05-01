function createNavItem(itemName, active = false) {
  const el = document.createElement("li");
  el.classList.add("nav__item");
  el.dataset.active = active;
  el.textContent = itemName;
  return el;
}

export { createNavItem };
