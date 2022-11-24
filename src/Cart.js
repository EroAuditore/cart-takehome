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
      itemAdded.basicTax = calculateBasicTax(itemAdded);
      itemAdded.importTax = calculateImportTax(itemAdded);
      itemAdded.Finalprice = +parseFloat(
        (itemAdded.basicTax + itemAdded.importTax + itemAdded.price) *
          itemAdded.quantity
      ).toFixed(2);
      this.total += +parseFloat(itemAdded.Finalprice).toFixed(2);
      this.taxes += +parseFloat(itemAdded.basicTax).toFixed(2);
      this.taxes += +parseFloat(itemAdded.importTax).toFixed(2);
    } else {
      item.basicTax = calculateBasicTax(item);
      item.importTax = calculateImportTax(item);
      item.Finalprice = +parseFloat(
        (item.basicTax + item.importTax + item.price) * item.quantity
      ).toFixed(2);

      this.total += +parseFloat(item.Finalprice).toFixed(2);
      this.taxes += +parseFloat(item.basicTax).toFixed(2);
      this.taxes += +parseFloat(item.importTax).toFixed(2);
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
