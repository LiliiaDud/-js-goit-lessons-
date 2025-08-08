/*  Array.prototype.map()

- Поелементо перебирає оригінальний масив
- Не змінює оригінальний масив
- Повертає новий масив такої ж довжини */



//Отримати список цін зі знижкою
const prices = [100, 250, 80, 150];

const discounted = prices.map(price => price * 0.9); // 10% знижка

console.log(discounted); // [90, 225, 72, 135]


// Перетворити числа в об'єкти
 const numbers = [2, 4, 6];

const objects = numbers.map(num => ({ value: num }));

console.log(objects);
// [{ value: 2 }, { value: 4 }, { value: 6 }]


// Отримання довжини слів
const words = ["JavaScript", "is", "awesome"];

const lengths = words.map(word => word.length);

console.log(lengths); // [10, 2, 7]



// задачі

/*завдання
В масиві planets зберігаються назви планет. Доповни код таким чином, 
щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин 
назв кожної планети з масиву planets. Обов'язково використовуй метод map().

Оголошена змінна planets
Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
Оголошена змінна planetsLengths
Значення змінної planetsLengths - це масив [5, 4, 5, 7]
Для перебирання масиву планет використаний метод map()  */
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);



// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];
/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */
  
// const getModels = (cars) => {
//     const res = [];

//     cars.forEach((item) => {
//         res.push(item.model);
//     })
//     return res;
// }

// console.log(getModels(allCars))

// const getModels = (cars) => {
//     return cars.map(car => car.model);
// }

// console.log(getModels(allCars))


/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
  
const makeCarsWithDiscount = (cars, discount) => {
   return cars.map(item => {
        return {
            ...item, // make: "Honda", model: "CR-V", amount: 14, price: 24045
             price: item.price * (1 - discount)
         }
     })
 }
 console.table(makeCarsWithDiscount(allCars, 0.2));
 console.table(makeCarsWithDiscount(allCars, 0.4));





// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
/*
* Збільшуємо кількість годин гравця за id
*/
  const playerId = "player-3";

// //                                  "player-1"
 const updatedPlayers = players.map((player) => {
     if(player.id === playerId) {
         return {
             ...player,
             timePlayed: player.timePlayed + 100
          }
     }
     return player;
 })
console.table(updatedPlayers);
 


/*Напиши стрілочну функцію getUserNames(users), яка прийматиме один 
параметр users — масив об’єктів користувачів. Функція має повертати 
масив імен усіх користувачів (властивість name) із масиву users.

Візьми код нижче і встав після оголошення своєї функції для перевірки 
коректності її роботи. У консоль будуть виведені результати її викликів. */
const getUserNames = (users) => users.map(user => user.name);

    console.log(getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


