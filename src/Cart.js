import { calculateBasicTax, calculateImportTax } from "./Calculate";

export default class Cart {
  constructor(refContainer) {
    this.items = [];
    this.total = 0;
    this.taxes = 0;
    this.refContainer = refContainer;
  }

  addItem(item) {
    const index = this.items.findIndex((i) => i.name === item.name);
    const itemAdded = this.items[index];

    if (itemAdded) {
      itemAdded.addItem();
      itemAdded.Finalprice = +parseFloat(
        (calculateBasicTax(itemAdded) +
          calculateImportTax(itemAdded) +
          itemAdded.price) *
          itemAdded.quantity
      ).toFixed(2);
    } else {
      item.Finalprice = +parseFloat(
        (calculateBasicTax(item) + calculateImportTax(item) + item.price) *
          item.quantity
      ).toFixed(2);
      console.log(
        "item.Finalprice",
        calculateBasicTax(item) + calculateImportTax(item) + item.price
      );
      this.items.push(item);
    }
  }

  removeItem(item) {
    this.items.filter((currentItem) => {
      currentItem.id != item.id;
    });
  }

  render() {
    this.refContainer.innerHTML = "";
    this.items.map((i) => {
      const p = document.createElement("p");
      p.innerText = i.quantity + " " + i.name + "   " + i.Finalprice;
      this.refContainer.append(p);
    });
  }

  calculateSubtotal(item) {}

  calculateTotal() {}
}
