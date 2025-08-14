//super(args) — це псевдонім конструктора батьківського класу.
//(В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.)
// In a child class, you use super() to call its parent's constructor and super.<methodName> to access its parent's methods.

/* class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor(params) {
    // Виклик конструктора батьківського класу User
    super(params.email); 

    this.posts = params.posts;
  }
}

const editor = new ContentEditor({ 
  email: "mango@mail.com", 
  posts: [] 
});
console.log(editor); // { #email: "mango@mail.com", posts: [] }
console.log(editor.email); // "mango@mail.com" */

//Завдання
/*Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access.
  Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.
  Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.*/

 
  class User {
  email;

    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    static role = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };

  access; // публічна властивість екземпляра
  
    constructor(params) {
      super(params.email);  // викликаємо конструктор батьківського класу для ініціалізації email
      this.access = params.access; //sзберігаємо рівень доступу у публічну властивість
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"  


