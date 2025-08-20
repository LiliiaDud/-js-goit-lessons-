/* querySelector — це метод Document, Element і DocumentFragment, 
який приймає CSS-селектор і повертає перший знайдений елемент 
або null, якщо збігів немає. */

const el = document.querySelector('.btn.primary'); // перша кнопка з класами "btn" і "primary"


/* Шукає за CSS-селекторами (усі, що ви знаєте з CSS: #id, .class, tag, [
attr=value], псевдокласи :hover, :checked, :not(), :is(), :has() тощо).
Повертає один елемент (перший у DOM-порядку).
Для багатьох елементів є querySelectorAll.

Якщо викликати на елементі — пошук буде в межах цього елемента: */
// const form = document.querySelector('form');
//const emailInput = form.querySelector('input[name="email"]'); // шукає лише всередині форми

// На документі
//document.querySelector(selector);

// На елементі
//someElement.querySelector(selector);


// Часті шаблони використання
/*
// 1) Робота з класами та контентом
const title = document.querySelector('h1.title');
if (title) {
  title.textContent = 'Вітаю!';
  title.classList.add('highlight');
}


//2) Атрибути та data-атрибути
const item = document.querySelector('[data-id="42"]');
if (item) {
  console.log(item.dataset.id); // "42"
}

//3) Форми: перший невалідний інпут
const form = document.querySelector('#signup');
const firstInvalid = form?.querySelector(':invalid');
if (firstInvalid) firstInvalid.focus();

//4) Кнопка “відкрити модалку”
const openBtn = document.querySelector('[data-modal-open]');
const modal   = document.querySelector('#modal');

openBtn?.addEventListener('click', () => modal?.classList.add('is-open'));


//5) Вибір складними селекторами
// перший активний пункт меню в головній навігації
const activeLink = document.querySelector('nav.main a.is-active');

// поле вводу, яке зараз відмічене (чекбокс/радіо)
const checked = document.querySelector('input[type="radio"]:checked');



//6) Пошук від конкретного контейнера з :scope
//:scope зручно, коли селектор починається з > або потрібно чітко обмежити корінь пошуку поточним елементом.
const card = document.querySelector('.card');
// тільки прямі дочірні кнопки всередині card
const mainBtn = card?.querySelector(':scope > .actions > .btn-primary');
*/


// __________задачі_____________
 
// Задача 1. Перемикач теми (dark / light)
// клік по тумблеру додає/знімає клас dark на <html>.
const toggle = document.querySelector('#theme-toggle');

toggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

//Задача 2. Валідація email на blur
//Умова: якщо email порожній — показати підказку.
const email = document.querySelector('input[name="email"]');
const hint  = document.querySelector('#email-hint');

email?.addEventListener('blur', () => {
  const empty = !email.value.trim();
  hint?.classList.toggle('visible', empty);
});


//Задача 3. Закрити модалку кліком поза контентом
const modal = document.querySelector('#modal');

modal?.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('is-open');
});

//Задача 4. Взяти значення з активної вкладки
const activeTabPanel = document.querySelector('[role="tabpanel"].is-active');
const firstInput = activeTabPanel?.querySelector('input');
console.log(firstInput?.value);


//Задача 5. Знайти картинку з alt, що містить слово

const img = document.querySelector('img[alt*="avatar" i]'); // i — case-insensitive
console.log(img?.src);


// Задача 6. Тост “копійовано” після кліку на код
const code = document.querySelector('pre code');
const toast = document.querySelector('#copied-toast');

code?.addEventListener('click', async () => {
  await navigator.clipboard.writeText(code.innerText);
  toast?.classList.add('show');
  setTimeout(() => toast?.classList.remove('show'), 1500);
});


// Задача 7. Вибір елемента з «проблемним» id
// У селекторі потрібно екранізувати спецсимволи:

<div id="price.current">100</div>
// краще так:
const price = document.querySelector('#price\\.current');
console.log(price?.textContent); // "100"