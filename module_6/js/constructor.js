// Для ініціалізації екземпляра класу використовується метод constructor.
//Якщо його не визначити в явному вигляді, то буде створений конструктор 
// за замовчуванням — порожня функція, яка не змінює екземпляр класу.


// Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.
//Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.
/*
class User {
  constructor(name, email) {
      console.log(name, email);
  }
}

const mango = new User(); // "constructor call"
console.log(mango); // {}


class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' } */





/* Задача. Конструктор рядків
Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.
Оголоси наступні методи класу:
getValue() — повертає поточне значення приватної властивості value.
padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи.  */


class StringBuilder {
  #value; // приватна властивість

  constructor(initialValue) {
    this.#value = initialValue; // зберігаємо початковий рядок у приватному полі
  }

  // Повертає поточне значення
  getValue() {
    return this.#value;
  }

  // Додати в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Додати на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додати і на початок, і в кінець
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

 
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

/*Приватна властивість #value
Оголошена через #, тож недоступна ззовні (тобто builder.value не існує). Це гарантує інкапсуляцію — змінювати рядок можна лише методами класу.

constructor(initialValue)
Приймає початковий рядок і записує його в приватне поле #value.

getValue()
Повертає поточне значення приватного поля. (Можна вважати «читачем» стану).

padEnd(str)
Додає str у кінець: this.#value += str.

padStart(str)
Додає str на початок: this.#value = str + this.#value.

padBoth(str)
Додає str і на початок, і в кінець за один крок:
this.#value = str + this.#value + str.

Рядки в JS — іммутабельні, тож кожна операція створює новий рядок і переприсвоює його в #value. Це очікувана й коректна поведінка. */