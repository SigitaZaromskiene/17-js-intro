import Shop from "./Shop.js";

const onlineKioskas = new Shop("Meskiuko kioskas", "EUR");

// onlineKioskas.intro();

onlineKioskas.addItem("obuolys", 130);
onlineKioskas.addItem("morka", 65);
onlineKioskas.addItem("arbata", 95);
// onlineKioskas.addItem("bulves", 135);
// onlineKioskas.addItem("cepelinai", 195);

// onlineKioskas.items();

// onlineKioskas.updatePrice("bulves", 90);

onlineKioskas.createCart("Augustas");
// onlineKioskas.createCart("Barbora");

onlineKioskas.addItemToCart("Augustas", 1, 1);
onlineKioskas.addItemToCart("Augustas", 2, 2);
onlineKioskas.addItemToCart("Augustas", 3, 5);

onlineKioskas.orderPrice("Augustas");
// onlineKioskas.addItemToCart("Barbora", 1, 2);
// onlineKioskas.addItemToCart("Barbora", 3, 1);
// onlineKioskas.addItemToCart("Barbora", 5, 1);

// onlineKioskas.order("Augustas");
// onlineKioskas.order("Barbora");

// onlineKioskas.order('Augustas');
// /*
// {
//     owner: 'Augustas',
//     items: [
//         { id: 2, count: 1 },
//         { id: 4, count: 2 },
//         { id: 5, count: 1 },
//     ]
// }
// */

// onlineKioskas.order('Barbora');
// /*
// {
//     owner: 'Barbora',
//     items: [
//         { id: 1, count: 2 },
//         { id: 3, count: 1 },
//         { id: 5, count: 1 },
//     ]
// }
// */

// onlineKioskas.orderPrice('Augustas');
// // Augustas order: 4.40 EUR.

// onlineKioskas.orderPrice('Barbora');
// // Barbora order: 5.50 EUR.

// onlineKioskas.removeItem('obuolys');
// // No more obuolys at "Meskiuko kioskas"!

// onlineKioskas.removeItem('morka');
// // No more obuolys at "Meskiuko kioskas"!

// onlineKioskas.pay('Augustas', 400);
// // Need more money!

// onlineKioskas.pay('Augustas', 600);
// // Here is your 1.60 EUR change!\nThank you for purchasing at "Meskiuko kioskas"!

// onlineKioskas.pay('Barbora', 550);
// // Thank you for purchasing at "Meskiuko kioskas"!

// onlineKioskas.addItemToCart('Augustas', 3, 1);
// // You can not add items to already paid cart!

// onlineKioskas.createCart('John');
// // John have an open cart at "Meskiuko kioskas"!

// onlineKioskas.addItemToCart('John', 3, 1);
// onlineKioskas.addItemToCart('John', 4, 2);
// onlineKioskas.addItemToCart('John', 5, 1);

// onlineKioskas.addItemToCart('John', 1, 1);
// // Item is out of stock!

// onlineKioskas.order('John');
// /*
// {
//     owner: 'John',
//     items: [
//         { id: 3, count: 1 },
//         { id: 4, count: 2 },
//         { id: 5, count: 1 },
//     ]
// }
// */

// onlineKioskas.items();

// onlineKioskas.orderPrice('John');
// // John order: 4.70 EUR.

// onlineKioskas.shopSummary();
// // Summary for the "Meskiuko kioskas"
// // ====================
// // Items sold: 8
// // Orders completed: 2
// // Orders in progress: 1
// // Profit: 9.90 EUR
// // Possible profit: 4.70 EUR
// // ====================
