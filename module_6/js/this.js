/* ➖this — це спеціальне ключове слово в JavaScript, яке посилається на контекст виконання функції.
➖Простими словами: воно вказує "хто викликав функцію".
➖Значення this не визначається при оголошенні функції, а визначається в момент виклику.*/

/* 
 this = залежить від того, ХТО викликав функцію

obj.method()      → this = obj
func()            → this = undefined (strict) або window (non-strict)
new Func()        → this = новий об'єкт
arrow func        → this = ззовні */




//задача. Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this 
// в місцях звернення до властивостей і методів об'єкта.

/*const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },

  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
*/


// 1. this у методах об’єкта
// Коли функція є методом об'єкта і викликається через крапку, this посилається на сам об'єкт.
/* 

const user = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
};
user.sayHello(); // "Hello, I am Alice"
*/
//🔹 this тут → user.


// 2. this у звичайних функціях
// У строгому режимі ('use strict') у звичайній функції this буде undefined.

/*
'use strict';
function test() {
  console.log(this);
}
test(); // undefined. 
*/

//Без строгого режиму this у звичайній функції (не методі) — це глобальний об'єкт (window у браузері).


//3. this у стрілочних функціях
// Стрілочні функції не мають власного this. Вони беруть його з місця, де були створені.

/* const user = {
  name: "Alice",
  friends: ["Bob", "Charlie"],
  showFriends: () => {
    console.log(this.friends); // ❌ this тут не user
  }
};

user.showFriends(); // undefined. 
// 🔹 Стрілку не варто використовувати як метод об'єкта, якщо потрібен this.
// Правильно:

showFriends() {
  console.log(this.friends);
}

*/

// 4. this у вкладених функціях
//Вкладена функція втрачає this, тому часто використовують стрілку або .bind.

/*. 

const obj = {
  name: "Test",
  outer() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
obj.outer(); // "Test"
// 🔹 Стрілка тут бере this з outer().

*/
// 5. Поширені помилки
// ❌ Виклик без контексту:
/*
const check = obj.method;
check(); // this = undefined
// ✅ Рішення:
const check = obj.method.bind(obj);
check(); // this = obj
*/


//задача
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


 
const SPEED = 60;

const bmw = {
    speed: 30,
    brand: "bmw"
}

const audi = {
    speed: 80,
    brand: "audi"
}

function speedSensor(maxSpeed) {
    if(this.speed <= maxSpeed) {
        return `Авто ${this.brand} рухаєтсья з безпечною швидкістю`;
    }

    return `Авто ${this.brand} перевищує швидкість`
}

console.log(speedSensor.call(bmw, SPEED));
console.log(speedSensor.apply(audi, [SPEED]));
