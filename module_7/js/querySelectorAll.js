/* Є список категорій (ul#categories). Треба:

Порахувати кількість категорій (li.item).

Для кожної категорії вивести:

текст заголовка (<h2>),

кількість елементів усередині (<li>). */
const categories = document.querySelectorAll('#categories .item');
// Кількість категорій = довжина NodeList
console.log('Number of categories:', categories.length);
// Щоб отримати дані з кожної категорії, використаємо цикл forEach
categories.forEach(category => {  // тут будемо діставати h2 і кількість <li>
  const title = category.querySelector('h2').textContent; У //кожному li.item є тег <h2>.Його можна отримати так
  //У кожному li.item є вкладений <ul>.Усередині — кілька <li>.Беремо їх усі й дивимося .length:
  const elementsCount = category.querySelectorAll('ul li').length; 
//Тепер виводимо дані:
  console.log('Category:', title);
  console.log('Elements:', elementsCount);
});


/* #categories → задає ширину і зовнішні відступи.

.item → оформлює кожну секцію (фон, радіус, падінг, відступ між блоками).

h2 → стилізує заголовки категорій.

ul всередині → робить вертикальний список з проміжками.

li → робить елементи списку схожими на "кнопки"*/