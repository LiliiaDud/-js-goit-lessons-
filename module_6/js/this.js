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


/*
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
*/




// завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.

/* const cruiseControl = {
     speed: 0,
     brand: "Audi",
     accelerate() {
         this.speed += 10;
         console.log(`Автомобіль ${this.brand} прискорюється, швидкість ${this.speed}`);
     },
     decrease() {
         if(this.speed <= 0) {
             console.log("Авто зупинилося");
             return;
         }

         this.speed -= 10;
         console.log(`Автомобіль ${this.brand} гальмує, швидкість ${this.speed}`);
     }
 }

 cruiseControl.accelerate();
 cruiseControl.accelerate();

 cruiseControl.decrease();
 cruiseControl.decrease();
 cruiseControl.decrease();

 console.log(cruiseControl);
*/




 /*
Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. 
У консоль будуть виведені результати їх роботи.*/

/*
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

/*що зроблено в кожному методі:

getBalance()
Повертає значення властивості balance об'єкта. Тому: return this.balance;.

getDiscount()
Повертає this.discount, а не глобальну/локальну змінну.

setDiscount(value)
Оновлює властивість об'єкта: this.discount = value;. Після цього всі методи, що читають this.discount, використовують нове значення.

getOrders()
Повертає масив замовлень об'єкта: return this.orders;.

addOrder(cost, order)
Оновлює баланс і додає нове замовлення у масив.*/





/*   Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.
 */

class Car {
    static maxPrice = 50000;
    
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
      if (newPrice <= Car.maxPrice) {
        this.#price = newPrice;   // Якщо newPrice більше за maxPrice — нічого не робимо
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000