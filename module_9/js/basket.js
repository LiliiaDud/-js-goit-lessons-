const container = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear"); //кнопка для очищення
const totalPrice = document.querySelector(".js-total-price");//загальна вартість

const PRODUCT_LS_KEY = 'basket';
// отримуємо з нашого локального сховища всі наші продукти. Отримати значення і розпарсимо
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? []; //якщо в корзині нічого немає ми отримаємо порожній масив
let totalCost;
//  створимо змінну в яку рахуємо загальну вартість продуктів
if(products.length) {
    clearBtn.hidden = false;
    totalCost = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}//передаємо колбекфункцію. першим параметром отримуємо акумулятор(acc) потім продукт, 
// нас цікавить тільки ціна. На кожній ітерації методу reduce повертаємо значення акумулятора 

//далі відобразимо загальну вартість на сторінці. Якщо там буде 
totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkup(products));
clearBtn.addEventListener("click", handlerClearBasket);

// очищую корзину                //
function handlerClearBasket() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "./shop.html";
}
// отримуємо як параметр масив продуктів і повертати. 
function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
        <li class="cart-item">
            <img src="${img}" name="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${price * qty} грн</p>
        </li>
    `).join("");
}
     