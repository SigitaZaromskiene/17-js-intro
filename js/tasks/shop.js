const valiuta = "EUR";
const prekes = [
  {
    name: "Bananas",
    price: 2,
    inStock: 10,
  },
  {
    name: "Agurkas",
    price: 3,
    inStock: 10,
  },
  {
    name: "Pomidoras",
    price: 1.57,
    inStock: 30,
  },
];

// OPTION 1

// function shop() {
//   console.log("MUSU PARDUOTUVE:");
//   console.log("----------------------");
//   const one = 1;
//   const two = 2;
//   const three = 3;
//   const sign = ")";

//   console.log(
//     `${one}${sign} ${prekes[0].name} kainuoja ${prekes[0].price.toFixed(2)}
//     ${valiuta} ir turime ju ${prekes[0].inStock} vienetu`
//   );
//   console.log(
//     `${two}${sign} ${prekes[1].name} kainuoja ${prekes[1].price.toFixed(2)}
//     ${valiuta} ir turime ju ${prekes[0].inStock} vienetu`
//   );
//   console.log(
//     `${three}${sign} ${prekes[2].name} kainuoja ${prekes[2].price}
//     ${valiuta} ir turime ju ${prekes[2].inStock} vienetu`
//   );
// }

// shop(prekes, valiuta);

// OPTION 2

function shop() {
  const sign = ")";
  for (let i = 0; i < prekes.length; i++) {
    console.log(
      `${i + 1}${sign} ${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
        2
      )} ${valiuta} ir turime ju ${prekes[i].inStock} vienetu`
    );
  }
}

shop(prekes, valiuta);

// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.
