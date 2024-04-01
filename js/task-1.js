console.log('----Task1 Start----');
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
} //quantity — кількість замовлених дроїдів / pricePerDroid — ціна одного дроїда / customerCredits — сума коштів на рахунку клієнта

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
console.log('----Task1 Finsh----');

/* Ця функція приймає кількість замовлених дроїдів,
ціну одного дроїда та суму коштів на рахунку клієнта.
Після цього вона розраховує загальну вартість замовлення,
а потім перевіряє, чи є достатньо коштів у клієнта на рахунку для оплати.
В результаті вона повертає відповідне повідомлення про замовлення. */
