class Shop {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.products = [];
    this.carts = [];
  }

  intro() {
    const res = `Hi, we are ${this.name}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details`;
    console.log(res);
    return res;
  }

  addItem(item, price) {
    this.products.push({
      id: this.products.length + 1,
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
    this.products.forEach((product) => {
      if (product.name === item) product.price = updatedPrice;
    });

    const res = `${this.name} updated price and sells ${item} for ${(
      updatedPrice / 100
    ).toFixed(2)} ${this.currency} now`;
    console.log(res);
    return res;
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
  createCart(name) {
    this.carts.push({
      name: name,
      items: [],
    });
    console.log(`${name} have an open cart at ${this.name}`);
  }

  addItemToCart(name, id, count) {
    this.carts.forEach((cart) => {
      if (cart.name === name) {
        cart.items.push({
          id: id,
          count: count,
        });
      }
    });

    console.log(`${name}, ${id}, ${count}`);
  }

  order(name) {
    const cart = this.carts.find((cart) => cart.name === name);
    console.log(cart);
  }

  orderPrice(name) {
    const cart = this.carts.find((cart) => cart.name === name);
    const items = cart.items;
    let result = 0;

    try {
      items.forEach((item) => {
        const product = this.products.find((product) => product.id === item.id);

        if (!product) return;

        const price = product.price;
        const count = item.count;

        result += price * count;
      });
    } catch (e) {
      console.log(e);
    }

    console.log(`${name} order: ${result} EUR.`);
    return result;
  }
}

export default Shop;
