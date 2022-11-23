import { calculateBasicTax, calculateImportTax } from "../src/Calculate";
import Item from "./../src/Item";

const testItem = {
  description: "music CD",
  price: 14.99,
  hasBasicTax: true,
  hasImportTax: false,
};

const testItem2 = {
  description: "imported bottle of perfume",
  price: 27.99,
  hasBasicTax: true,
  hasImportTax: true,
};

describe("Calculate helper", () => {
  it("calcualte only 10% of the price of item that has basic tax", () => {
    const cartitem = new Item(testItem);
    const basicTax = calculateBasicTax(cartitem);
    const importTax = calculateImportTax(cartitem);

    expect(basicTax).toBe(1.5);
    expect(importTax).toBe(0);
  });
  it("calculate the 10% and 5% of the price of item with basic and import tax", () => {
    const cartitem = new Item(testItem2);
    const basicTax = calculateBasicTax(cartitem);
    const importTax = calculateImportTax(cartitem);

    expect(basicTax).toBe(2.8);
    expect(importTax).toBe(1.4);
  });
});
