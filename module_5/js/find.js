 /*.find()  
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові (тобто коли колбек повертає true) 
 * - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined
 */
// завдання 
/*
Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.

Використовуючи метод find(), доповни код таким чином, щоб:

У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.*/

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

const users = [{id: 1}, {id: 2}, {id: 3}];

//завдання 2  Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, 
// пошта якого (властивість email) збігається зі значенням другого параметра email.

const getUserWithEmail = (users, email) => users.find((user) => user.email === email);



/*
const user = users.find(user => user.id === 2);
console.log(user); // {id: 2}*/