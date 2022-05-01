function createNavItem(itemName, active = false) {
  const el = document.createElement("li");
  el.classList.add("nav__item");
  el.dataset.active = active;
  el.dataset.tab = itemName.toLowerCase();
  el.textContent = itemName;
  return el;
}

function activateTab(tabName) {
  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach((tab) => (tab.dataset.active = false));
  document.querySelector(`[data-tab=${tabName}]`).dataset.active = true;
}

export { createNavItem, activateTab };
