/* створення та обробка промісу
 - Клас Promise
 - resolve
 - reject
 - then, cath, finally
*/
/*
const prom = new Promise((resolve, reject) => {
    const random = Math.random();

    setTimeout(() => {
        if (random > 0.5) {
            resolve("Ok lalala");
        }
        reject("Oppps");
    }, 1000)
})
prom
    .then((res) => {
        console.log("then", res);
    })
    .catch((error) => {
        console.log("catch", error);
    })
    .finally(() => {
        console.log("finally");
    })
*/


/* Ланцюги промісів 
- декілька послідовних then
- then повертає проміс
 */
/*
const prom = new Promise((resolve) => {
 resolve(5);
})

prom
    .then((data) => {
        console.log(data);
        return data * 2;
    })
   .then((result) => {
       console.log(result);
       return result * 10
   })
    .then((data) => {
        console.log(data);
    })
    */


//   промісифікація
// проблема доступу до результату проміса з колбекомї
// функція яка повертає проміс
/* 
const makeOrder = (dish, onSuccess, onError) => {
    const random = Math.random();

    setTimeout(() => {
        if (random > 0, 5) {
            onSuccess(`Ваше замовлення ${dish}`);
        }
        
        onError("Закінчилися продукти")
    }, 1000)
    makeOrder(
        "пиріжок",
        (str) => {
            console.log("onSuccess", str)
        },
        (lalala) => {
            console.log("onError", lalala);
        }
    )
}  
*/



/*
    // функція буде повертати проміс
const makeOrder = (dish) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
    // проміс або завершиться успіхом або помилкою
        setTimeout(() => {
        console.log(random);
        if (random > 0.5) {
            resolve(`Ваше замовлення ${dish}`);
            return;// return не обовязковий
        }

        reject("Закінчилися продукти");
    }, 1000)
})
}
// проміс обробляємо then і catch
makeOrder("пиріжок")
    .then(res => {
        console.log("then", res);
    })
    .catch(error => {
    console.log("catch", error);
})
 */


/*
const start = Date.now(); 

const res1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            
            resolve({ title:})
        })
      })
    }

res1()
    .then(data => {
        console.log(data);
        )}
    .catch (error => {
        console.log(error)
})
    
res2()
    .then(data => {
        console.log(data);
        )}
    .catch (error => {
        console.log(error)
})
    
res3()
    .then(data => {
        console.log(data);
        )}
    .catch (error => {
        console.log(error)
})
    */


/*
setTimeout(() => {
    console.log("step 1")
}, 0)

new Promise((resolve) => {
    resolve("step 2")
}, 0)
    
new Promise((resolve) => {
    resolve("step 3")
})    
    .then(data => {
        console.log(data);
        return "step 4"
    })
     .then(data => {
        console.log(data);
    })

setTimeout(() => {
    console.log("step 5");
    }, 0)
 */