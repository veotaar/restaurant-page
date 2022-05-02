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

function menuItem(_dishName, _dishDesc, _price) {
  /*
  <div class="menu-item">

    <div class="dish">
      <p class="dish-name">Teriyaki Tofu</p>
      <p class="dish-desc">Tofu, onions, garlic, teriyaki sauce...</p>
    </div>

    <p class="price">7.00 €</p>

  </div>
*/
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const dish = document.createElement("div");
  dish.classList.add("dish");

  const dishName = document.createElement("p");
  dishName.classList.add("dish-name");
  dishName.innerText = _dishName;

  const dishDesc = document.createElement("p");
  dishDesc.classList.add("dish-desc");
  dishDesc.innerText = _dishDesc;

  dish.appendChild(dishName);
  dish.appendChild(dishDesc);

  const price = document.createElement("p");
  price.classList.add("price");
  price.innerText = `${_price} €`;

  item.appendChild(dish);
  item.appendChild(price);

  return item;
}

export { createNavItem, activateTab, menuItem };
