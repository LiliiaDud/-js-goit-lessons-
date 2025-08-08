/*
 * Array.prototype.filter()
* - Поелементно перебирає оригінальний масив
* - Повертає новий масив (з елементами або порожній)
* - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
*    - якщо коллбек повернув true, елемент додається в масив, що повертається
*    - якщо коллбек повернув false, елемент НЕ додається в масив, що повертається */

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився



// задачі
/*
завдання з конспекту
Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, 
а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

Оголошено змінну numbers
Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
Оголошено змінну evenNumbers
Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
Оголошено змінну oddNumbers
Значення змінної oddNumbers - це масив [17, 61, 47, 73]
Для перебору масиву numbers використано метод filter() */

/*const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);*/




 /*Задача: Фільтрація користувачів за віком.
Створи два нових масиви:
adults — користувачі, яким 18 років і більше.
minors — користувачі, яким менше 18 років.*/
/*const users = [
  { name: "Anna", age: 22 },
  { name: "Bohdan", age: 17 },
  { name: "Kateryna", age: 30 },
  { name: "Yurii", age: 16 },
  { name: "Olha", age: 25 },
];

const adults = users.filter(user => user.age >= 18);
const minors = users.filter(user => user.age < 18);

console.log(adults);
console.log(minors);*/





/*Задача: Фільтрація товарів за ціною
Створити новий масив доступних товарів, ціна яких менше або дорівнює 500.
Створити інший масив дорогих товарів, ціна яких більша за 500.*/
/*const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 300 },
];

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 300 },
];

const availableProducts = products.filter(product => product.price <= 500);
const expensiveProducts = products.filter(product => product.price > 500);

console.log(availableProducts);
console.log(expensiveProducts);*/





/*🧩 Задача,  фільтрувати товари, які дешевші за 500 і мають назву довжиною понад 5 символів. 
У тебе є масив продуктів. Виведи ті продукти, які коштують менше ніж 500 і назва яких довша за 5 символів. 
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 300 },
  { name: "Pen", price: 5 },
  { name: "Desk", price: 200 },
];

const filteredProducts = products.filter(
  product => product.price < 500 && product.name.length > 5); // назва довша за 5 символів.

console.log(filteredProducts);*/



//задача
/*завдання «Пошук за кольором очей»
Доповни функцію getUsersWithEyeColor(users, color) таким чином, 
щоб вона повертала масив користувачів, у яких колір очей 
(властивість eyeColor) збігається зі значенням другого параметра color.*/
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);
console.log(getUsersWithEyeColor(users));



//Метод filter() на масиві об'єктів

/*Приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:

високі бали (від 80 (включно)),
низькі бали (нижче 50),
середні бали (від 50 (включно) до 80).*/
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston



//задача
/*завдання з конспекту
Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, 
author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) 
більший за або дорівнює значенню змінної MIN_RATING.
У змінній booksByAuthor утворився масив книг, написаних автором 
з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.*/
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(AUTHOR);


//задача
//Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб 
// повернути масив користувачів, вік (збережений у властивості age) 
// яких потрапляє у заданий діапазон від minAge до maxAge.

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(user => user.age >= minAge && user.age <= maxAge);

console.log(getUsersWithAge);*/



/*
Напиши стрілочну функцію getUsersWithFriend(users, friendName), яка прийматиме два параметра:

перший параметр users — масив об’єктів користувачів
другий параметр friendName — ім’я друга для пошуку.
Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.
 Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є 
 такий друг немає, то функція має повернути порожній масив. */

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
