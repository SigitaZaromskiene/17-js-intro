import Shop from "./Shop.js";

const onlineKioskas = new Shop("Meskiuko kioskas", "EUR");

onlineKioskas.intro();

onlineKioskas.addItem("obuolys", 130);
onlineKioskas.addItem("morka", 65);
onlineKioskas.addItem("arbata", 95);
onlineKioskas.addItem("cepelinai", 195);

onlineKioskas.items();

// onlineKioskas.updatePrice("bulves", 90);

// onlineKioskas.createCart("Augustas");
// onlineKioskas.createCart("Barbora");

// onlineKioskas.addItemToCart("Augustas", 2, 1);
// onlineKioskas.addItemToCart("Augustas", 4, 2);
// onlineKioskas.addItemToCart("Augustas", 5, 1);

// onlineKioskas.addItemToCart("Barbora", 1, 2);
// onlineKioskas.addItemToCart("Barbora", 3, 1);
// onlineKioskas.addItemToCart("Barbora", 5, 1);

// onlineKioskas.order("Augustas");
// onlineKioskas.order("Barbora");
