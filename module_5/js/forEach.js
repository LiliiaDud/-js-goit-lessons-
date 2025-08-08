//  Array.prototype.forEach()
 /* - Поелементо перебирає оригінальний масив
  - Нічого не повертає
  - Замінює класичний for, якщо не потрібно переривати цикл */
  
  const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
  console.log('number', number);
});

console.log(numbers);


//задачі


/*завдання 1
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, 
і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і 
повертається як результат роботи функції.

Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації 
додає до totalPrice значення поточного елемента масива orderedItems.*/


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
   orderedItems.forEach(function (item) { 
   totalPrice += item;  
});
   return totalPrice;
}
//forEach -  Проходиться по кожному елементу масиву
//function(item)- Анонімна функція, яка викликається для кожного елемента
//totalPrice += item  - Додає значення елемента до загальної суми */



/* завдання  2
Функція filterArray(numbers, value) приймає першим параметром масив чисел 
numbers і повертає новий масив, в якому будуть тільки ті елементи 
оригінального масиву, які більші за значення другого параметра числа value.
 Якщо таких значень не буде знайдено, функція повертає порожній масив.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
  */
 function filterArray(numbers, value) {
   const filteredNumbers = [];

   numbers.forEach(function (number) {
     if (number > value) { //Перевіряємо, чи більше поточне число за задане значення
    filteredNumbers.push(number);//Якщо так — додаємо у новий масив
   }
 });
  return filteredNumbers;
}