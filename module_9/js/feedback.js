const STORAGE_KEY = "feedback-msg";
// в нас є форма яку ми отримали за допомогою document.querySelector
const form = document.querySelector(".feedback-form");
//отримуємо textarea яка знаходиться в цій формі (querySelector для отримання якихось даних)
const textarea = form.querySelector("textarea");

// на нашу textarea навішаємо слухача події
textarea.addEventListener("input", handlerInput);
populateTextArea();

function handleSubmit(event) {
    event.preventDefault();
    console.log("Відправлення форми");
    event.target.reset(); //таким чином ми звертаємося до нашої форми
    localStorage.removeItem(STORAGE_KEY);
}
/* - отримуємо значення поля. 
-Зберігаємо його у сховище */

// далі створюємо цю функцію. Ця функція передається в addEventListener як аргумент
// ця функція буде отримувати параметром обєкт event(обєкт подій)
function handlerInput(event) {
// в цьому обєкті можемо звернутися до властивості target і отримати посилання на мій елемень в якому відбулася подія
    //    console.log(event.target);  
    const message = event.target.value;
    //    console.log(message);// тепер в моїй змінній message я отримала значеня яке ввів користувач
    localStorage.setItem(STORAGE_KEY, message);
}
/* 
- отримуємо значення зі сховищa
- якщо там щось було, оновлюємо DOM
*/
function populateTextArea() {
    const message = localStorage.getItem(STORAGE_KEY);

    if(message) {
        textarea.value = message;
    }
}
