console.log('----Task2 Start----');
function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

console.log('----Task2 Finsh----');
/* Функція formatMessage — це як ящик для твоїх листів.
Ти кладешь листок(рядок тексту) у цей ящик, а якщо листок короткий і поміщається у ящик, він повертає тобі той самий листок.
Але якщо листок занадто довгий і не поміщається у ящик, я відкриваю його, обрізаю до розміру ящика і кладу туди,
а потім додаю три чернильні крапки, щоб показати, що текст продовжується. 
Таким чином, ти завжди отримаєш листок, який можеш прочитати! */
