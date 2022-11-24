import Item from "../src/Item";
import Cart from "../src/Cart";

const testItem = {
  description: "Test description",
  price: 12.99,
  hasBasicTax: true,
  hasImportTax: false,
};

const testItem2 = {
  description: "Test description 2",
  price: 12.99,
  hasBasicTax: true,
  hasImportTax: false,
};

describe("Cart of items", () => {
  it("Adds a new item to cart collection items when is added", () => {
    const cartTest = new Cart();
    const cartitem = new Item(testItem);
    cartTest.addItem(cartitem);

    expect(cartTest.items.length).toBe(1);
  });
  it("Adds only one item when of each description", () => {
    const cartTest = new Cart();
    const cartItem = new Item(testItem);
    const cartItem2 = new Item(testItem2);
    cartTest.addItem(cartItem);
    cartTest.addItem(cartItem);
    cartTest.addItem(cartItem2);

    expect(cartTest.items.length).toBe(2);
  });
  it("Sums the quantity of the same product", () => {
    const cartTest = new Cart();
    const cartItem = new Item(testItem);
    const cartItem2 = new Item(testItem2);
    cartTest.addItem(cartItem);
    cartTest.addItem(cartItem);
    cartTest.addItem(cartItem2);

    expect(cartTest.items[0].quantity).toBe(2);
    expect(cartTest.items[1].quantity).toBe(1);
  });
  it("Adds 10% of basic tax", () => {
    const testItemImported = {
      description: "imported bottle of perfume",
      price: 27.99,
      hasBasicTax: true,
      hasImportTax: false,
    };
    const cartTest = new Cart();
    const cartItem = new Item(testItemImported);
    cartTest.addItem(cartItem);
    expect(cartTest.items[0].Finalprice).toBe(30.79);
  });
  it("Adds 5% of import tax", () => {
    const testItemImported = {
      description: "imported bottle of perfume",
      price: 27.99,
      hasBasicTax: false,
      hasImportTax: true,
    };
    const cartTest = new Cart();
    const cartItem = new Item(testItemImported);
    cartTest.addItem(cartItem);
    expect(cartTest.items[0].Finalprice).toBe(29.39);
  });

  it("Adds 10% and 5% of basic and import tax", () => {
    const testItemImported = {
      description: "imported bottle of perfume",
      price: 27.99,
      hasBasicTax: true,
      hasImportTax: true,
    };
    const cartTest = new Cart();
    const cartItem = new Item(testItemImported);
    cartTest.addItem(cartItem);
    expect(cartTest.items[0].Finalprice).toBe(32.19);
  });
});

describe("Test case 1", () => {
  // Test case 1
  const bookItem = {
    description: "book",
    price: 12.49,
    hasBasicTax: false,
    hasImportTax: false,
  };
  const CDItem = {
    description: "music CD",
    price: 14.99,
    hasBasicTax: true,
    hasImportTax: false,
  };
  const chocolateItem = {
    description: "chocolate",
    price: 0.85,
    hasBasicTax: false,
    hasImportTax: false,
  };

  const cartTest = new Cart();
  const cartBookItem = new Item(bookItem);
  const cartCDItem = new Item(CDItem);
  const cartChocolateItem = new Item(chocolateItem);
  cartTest.addItem(cartBookItem);
  cartTest.addItem(cartBookItem);
  cartTest.addItem(cartCDItem);
  cartTest.addItem(cartChocolateItem);

  it("Sums the total prices with taxes", () => {
    expect(cartTest.total).toBe(42.32);
  });
  it("Sums the total taxes", () => {
    expect(cartTest.taxes).toBe(1.5);
  });
});
