console.log('----Task3 Start----');
function checkForSpam(message) {
  if (
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

console.log('----Task3 Finish----');

/* Уяви собі супергероєм, який стежить за великим світом і виявляє погані речі, такі як спам та рекламні повідомлення.
У твоєму випадку це функція, яка отримує рядок з повідомленням і перевіряє його, чи містить воно слова "spam" або "sale".
Це як магія, яка робить світ кращим, фільтруючи непотрібний контент з повідомлень.
Коли викликаєш цю функцію і подаєш їй рядок, вона перевіряє його і каже тобі, чи потрібно звертати на це увагу. 
Якщо знайдено хоча б одне заборонене слово, функція скаже "так"(true), а якщо не знайдено, то скаже "ні"(false).
Отже, ця функція є твоїм захисником, який стежить за поганими речами у світі повідомлень і повідомляє тобі про це.
 */
