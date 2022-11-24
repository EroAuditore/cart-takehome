export default class Item {
  constructor(elm, handleAddToCart) {
    this.name = elm.description;
    this.price = elm.price;
    this.Finalprice = elm.price;
    this.quantity = 1;
    this.basicTax = 0;
    this.importTax = 0;
    this.hasImportTax = elm.hasImportTax;
    this.hasBasicTax = elm.hasBasicTax;
    this.handleAddToCart = handleAddToCart;
  }
  addItem() {
    this.quantity += 1;
  }

  render() {
    const div = document.createElement("div");
    const btn = document.createElement("button");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = this.name;
    p2.textContent = this.price;
    btn.innerText = "Add to cart";
    btn.onclick = () => this.handleAddToCart(this);

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(btn);
    return div;
  }
}
