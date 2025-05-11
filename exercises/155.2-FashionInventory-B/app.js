function renderAverageCostPerDesigner(inventory) {
  const result = [];

  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i];
    const shoes = designer.shoes;
    let totalPrice = 0;

    for (let j = 0; j < shoes.length; j++) {
      totalPrice += shoes[j].price;
    }

    const averagePrice = totalPrice / shoes.length;

    result.push({
      name: designer.name,
      averagePrice: averagePrice
    });
  }

  return result;
}

// Ejemplo de uso:
let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

console.log(renderAverageCostPerDesigner(currentInventory));