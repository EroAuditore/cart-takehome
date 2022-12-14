import Cart from "./Cart.js";
import Item from "./Item.js";

let items = [
  {
    description: "Book",
    price: 13.99,
    hasBasicTax: false,
    hasImportTax: false,
  },
  {
    description: "Imported chocolate",
    price: 12.99,
    hasBasicTax: false,
    hasImportTax: true,
  },
  {
    description: "Imported perfume",
    price: 100.0,
    hasBasicTax: true,
    hasImportTax: true,
  },
];

let mainCart;

const handleAddToCart = (item) => {
  mainCart.addItem(item);
  mainCart.render();
};

const main = () => {
  const cartContainer = document.getElementById("cart_container");
  const itemSection = document.getElementById("items_section");

  mainCart = new Cart(cartContainer);

  items.map((elm) => {
    const i = new Item(elm, handleAddToCart);
    itemSection.append(i.render());
  });
};

window.onload = main();
