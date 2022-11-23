import { calculateBasicTax } from "../src/Calculate";
import Item from "./../src/Item";

const testItem = {
  description: "music CD",
  price: 14.99,
  hasBasicTax: true,
  hasImportTax: false,
};

describe("Calculate", () => {
  it("return de 10% of the price of item that has basic tax", () => {
    const cartitem = new Item(testItem);
    const basicTax = calculateBasicTax(cartitem);

    expect(basicTax).toBe(1.5);
  });
});
