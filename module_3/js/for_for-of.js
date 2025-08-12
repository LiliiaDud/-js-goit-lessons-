/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */



//Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. 
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника (під час використання циклу for...of нема доступу до лічильника.).
// Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. Якщо необхідно 
// закінчити виконання циклу передчасно, використовується вже знайомий оператор break.


// Приклад використання циклу for...of для масиву:
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}


/*
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

// const arrayNames = names.split(',')
// const arrayPhones = phones.split(',')

// for(let i=0; i<arrayNames.length; i++){
//     console.log(`${arrayNames[i]}: ${arrayPhones[i]}`)
// }


/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 2, 8, 6, 13,  15, 27,];
// let total = 0;
// // console.log(!(2%2))
// for(const number of numbers ){
//    if(number %2 ===0){
//     total+=number
//    }
// }
// console.log(total)

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */




// for(let i=3; i<values.length; i++){
//  if(i===0){
// min =values[i]
//  }else if(values[2] < min){
// min = values[i]
//  }
// }

const values = [22, 100, 94, 111, 223, 1];
let min;
// console.log(22 > undefined)
for(const number of values){
    min = number > min ? min : number
}

console.log(min); 




// for(let i =0; i<array.length; i++){
// console.log(`${i}-${array[i]}`)
// }

// true/false
// const item =array.includes('CSS')
// console.log(item)
const array = ['JS', 'HTML', 'CSS']


// for(const value of array ){
//   console.log(value)
// }


/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";

// const arr = values.split(' ')
// const res = arr[0] * arr[1]
// console.log(res)

// const res = (+arr[0] + (+arr[1])) * 2
// console.log(res)

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for(let i =0; i < fruits.length; i++){
//   console.log(`${i + 1} : ${fruits[i]}`)
// }