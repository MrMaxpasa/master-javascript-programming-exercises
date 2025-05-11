let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
  const result = [];

  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      const shoe = designer.shoes[j];
      const name = shoe.name;
      if (name.toLowerCase().includes('lace')) {
        const nameWords = name.split(' ');
        const targetWordIndex = nameWords.findIndex(word =>
          word.toLowerCase().includes('lace')
        );
        result.push({
          nameWords: nameWords,
          targetWordIndex: targetWordIndex
        });
      }
    }
  }
  return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
