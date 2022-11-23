export default class Cart {
  constructor(refContainer) {
    this.items = [];
    this.total = 0;
    this.taxes = 0;
    this.refContainer = refContainer;
  }

  addItem(item) {
    const index = this.items.findIndex((i) => i.name === item.name);

    if (index >= 0) {
      this.items[index].addItem();
    } else {
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
      p.innerText = i.quantity + " " + i.name + "   " + i.price;
      this.refContainer.append(p);
    });
  }

  calculateSubtotal(item) {}

  calculateTotal() {}
}
