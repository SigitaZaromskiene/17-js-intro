class Shop {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.products = [];
  }

  intro() {
    const res = `Hi, we are ${this.name}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details`;
    console.log(res);
    return res;
  }

  addItem(item, price) {
    this.products.push({
      name: item,
      price: price,
    });

    const result = `${this.name} sells ${item} for ${(price / 100).toFixed(
      2
    )} ${this.currency} now!`;
    console.log(result);
    return result;
  }

  updatePrice(item, updatedPrice) {
    console.log(
      `${this.name} updated price and sells ${item} for ${(
        updatedPrice / 100
      ).toFixed(2)} ${this.currency} now`
    );
  }

  items() {
    const title = `Items for sale at ${this.name}`;
    const line = `====================`;
    let list = "";
    let i = 0;

    for (const product of this.products) {
      const formatedName =
        product.name[0].toUpperCase() + product.name.slice(1);
      const formatedPr = (product.price / 100).toFixed(2);
      list += ` ${++i}  ${formatedName} - ${formatedPr} ${this.currency}\n`;
    }
    const res = `${title}\n${line}\n${list}\n${line}`;
    //  ====================
    // 1) Obuolys - 1.30 EUR;
    // 2) Morka - 0.65 EUR;
    // 3) Arbata - 0.95 EUR;
    //  4) Bulves - 1.35 EUR;
    // 5) Cepelinai - 1.95 EUR;
    //  ====================
    //   `

    console.log(res);
    return res;
  }
}

export default Shop;
