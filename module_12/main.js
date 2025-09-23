import axios from "axios";

import './style.css'


/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';


//1 cпочатку ми отримуємо з нашої сторінки нашу форму
const form = document.querySelector(".search-form");
//2 далі ми отримуємо наш контейнер куди будемо відмальовувати наші картки
const container = document.querySelector(".card-container");
    //16 коли запит починається ми отримуємо loader
const loader = document.querySelector(".loader");

// 5 на форму вішаємо submit (коли відправляємо дані з нашої форми. Створюємо функцію onSearch (яка буде відпрацьовувати тоді коли наша форма відправиться)
form.addEventListener("submit", onSearch);
// 3 створюємо функцію яка буде робити запит на сервер. Робимо її асинхронною (async)
// називаємо її (fetchPokemon)
//4 в тілі функції створюємо змінну і зберігаємо результат (axios) запиту на сервер.
// але кажемо їй зачекай (await) поки не виконається проміс, потім розпарсь його і результат збережи в змінну.
// в axios ми передаємо BASE_URL (куди ми робимо запит), а далі додай імя поекмона pokemonName.
// в нашу функцію ми будемо отримувати імя як параметр. Дочекаємося результату запиту на сервер обробимо проміс і отримаємо обєкт який axios повертає
async function fetchPokemon(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
} // в цього обєкта буде властивість data в якій зберігається інфо яку сервер мені відправив на мій запит.

// 6 функція onSearch  буде відпрацьовувати тоді коли наша форма відправиться.
// функція отримає обєкт події event. Одразу потрібно припинити дефолтну поведінку сторінки 
async function onSearch(event) {
    event.preventDefault(); //7 щоб сторінка не перезавантажувалась використовуємо preventDefault
    const searchQuery = event.target.elements.query.value.trim(); // 8 далі витягуємо імя покемона воно зберігається за цим посиланням event.target.elements.query
    // щоб витягти на нього значення яке ввів користувач з інтерактивного поля, потрібно викликати value і отримуємо значення

    //17 прибираємо loader у блоці finally у будь-якому випадку
    loader.classList.remove("hidden");
    //9 щоб відловлювати помилку використовуємо в асинх функц try/catch
    try {
        const data = await fetchPokemon(searchQuery); // у випадку успіху створюємо змінну (data) в якій збережемо результат яку сервер поверне. кажемо зачекати поки fetchPokemon виконає запит, але сюди потрібно передати рядок
        console.log(data);
        // 14 звераємося до innerHTML і відмальовуємо сюди data
        container.innerHTML = renderPokemonCard(data);
    } catch(error) {
        onFetchError(error);
    } finally {
        loader.classList.add("hidden");
    }
}
// 10 створюємо функцію renderPokemonCard яка буде відмальовувати розмітку. 
// ставимо фігурні дужки {, це означає що ми будемо витягати певні властивості які нас цікавлять. 
 // Одразу їх деструктуруємо { front_default }
function renderPokemonCard({ name, weight, height, abilities, sprites: { front_default } }) {
    //12 робимо змінну яка відповідатиме за відмалювання списку цих здібностей. Беремо властивість abilities і проходимося по ній map
    //abilities це масив обєктів. ability це кожен конкретний обєкт. Деструктуруємо його і витягаємо
      //13 метод map поверне масив з рядочками, тож нам потрібно викликати метод .join("") і йому як аргумент передаємо порожній рядочок
    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li> 
    `).join("");

    // 11 повертаємо розмітку. Додаємо зображення. 
    // створимо розмітку <ul> ${abilitiesList} 
    return `
        <div class="card">
            <div class="card-img-top">
                <img src="${front_default}" alt="${name}"/> 
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${name}</h2>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>

                <p class="card-text">
                    <h4>Вміння: </h4>
                    <ul>    
                        ${abilitiesList} 
                    </ul>
                </p>
            </div>
        </div>
    `
}
// 15 функція яка буде викидати нам помилку
function onFetchError(error) {
    alert(`Oooops, Спробуйте ще. ${error.message}`)
}