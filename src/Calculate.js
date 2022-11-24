const calculateSubTotal = (item) => {
  let sub_total = item.price * item.quantity;
  if (item.hasBasicTax) {
    sub_total;
  }
};

const calculateBasicTax = (item) => {
  let basicTax = 0;
  if (item.hasBasicTax) {
    basicTax = item.price * 0.1;
    basicTax = +(Math.round(basicTax * 100) / 100).toFixed(2);
  }
  return basicTax;
};

const calculateImportTax = (item) => {
  let importTax = 0;
  if (item.hasImportTax) {
    importTax = item.price * 0.05;
    importTax = +(Math.round(importTax * 100) / 100).toFixed(2);
  }
  return importTax;
};

export { calculateBasicTax, calculateImportTax };
