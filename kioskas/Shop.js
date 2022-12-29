class Shop {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.listToBuy = [];
    this.buyerName = [];
    this.cart = [{ owner: "Lina", items: [] }];
    // this.order = [];
    this.price = price;
  }

  // items() {

  //   onsole.log(`Items for sale at ${this.name}:
  //   //   ${this.order} ${this.list} - ${this.prices}${this.currency}`);
  // }

  //   order(orderItem) {
  //     this.order.push(orderItem);
  //   }

  // intro() {
  //   console.log(`Hi, we are ${this.name}\n ${this.list}\n ${this.order}`);
  // }

  addItem(item, price) {
    this.listToBuy.push(item);
    this.prices.push(price);
    console.log(
      `${this.name} sells ${item} for ${(price / 100).toFixed(2)} ${
        this.currency
      } now!`
    );
  }

  updatePrice(item, updatedPrice) {
    console.log(
      `${this.name} updated price and sells ${item} for ${(
        updatedPrice / 100
      ).toFixed(2)} ${this.currency} now`
    );
  }

  createCart(buyer) {
    this.buyerName.push(buyer);
    console.log(`${buyer} have an open cart at ${this.name}`);
  }

  addItemToCart(name, id, count) {
    this.cart.push(
      `{ owner: ${name}, items: [{ id: ${id}, count: ${count}}]  }`
    );
  }

  order(buyer) {
    console.log(`${this.cart.find((ow) => ow.owner === buyer)} `);
  }
}

export default Shop;
