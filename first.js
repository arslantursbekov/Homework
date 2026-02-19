/*let name = "Arslan";
let surname = "Tursbekov";
console.log(name,surname);

/*let x = 80;
let y = 100;
console.log(x, y);
console.log(x + y);

/*let num1 = 200
let num2 = 300
let num3 = 500
console.log(num1,num2,num3)
console.log(num1 - num2 + num3)
console.log(num1 + num2 + num3)
console.log(num3 - num1)

/*let age = 22;
console.log(age);
let текст = "Прошел Год"
console.log(age + 1);

/*let numb1 = Number(prompt());
let numb2 = Number(prompt());
console.log(numb1 + numb2);

/*let numbe1 = Number(prompt());
console.log(numbe1+5);

/*let number1 = Number(prompt());
let number2 = Number(prompt());
console.log(number1 ** number2);

/*let n = Number(prompt());
console.log(n % 4);

/*let n = Number(prompt());
console.log(n % 10);

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
console.log((b**2 - 4*a*c)**1/2);

let x = Number(prompt());
let y = Number(prompt());
console.log(x > y)

let x = Number(prompt());
if(x>0){
    console.log("Положительное");}

let s = Number(prompt())
if(s>100 && s<1000){
    console.log("Трехзначное")
};*/

/*let x = Number(prompt());
if (x>=1000);{
    console.log(x-x*10/100);
    console.log("Спасибо за покупку")
}
if (x<1000);{
    console.log("Спасибо за покупку")
}*/

/*let n = Number(prompt())
if ( n > 0) {
    console.log("Положительное")
} else if ( n === 0 ) {
    console.log("Не положительное и не отрицательное")
} else {
    console.log("Отрицательное")
}*/

/*let n = Number(prompt())
if ( n === 84) {
    console.log("Отлично")
} else if ( n === 64) {
    console.log("Хорошо")
} else if ( n === 0) {
    console.log("Учись")
} */

/*let n = Number(prompt())
if ( n > 0 && n < 11) {
    console.log("Доброе утро")
} else if (n > 12 && n < 17 ) {
    console.log("Добрый день")
} else if (n > 18 && n < 23 ) {
    console.log("Добрый вечер")
}*/



/*let grade = 45 
let admisson = (grade >=50)? "Допущен": "Не допущен";
console.log("Допуск на экзамен:" + admisson );*/


/*let age = Number(prompt())
let nitro = (age >=18)? "Доступ разрешен":"Доступ запрещен";
console.log(nitro);*/

/*let a = Number(prompt());
let b = (a >=5)? "200рублей" : "350рублей";
console.log("Стоимость доставки:  " + b );*/

/*let weight = Number(prompt());
let status = prompt();
let price;
if (weight <= 5) {
  if (status === "экспресс") {
    price = "1000 руб";
  } else if (status === "обычная") {
    price = "500 руб";
  } else {
    price = "Некорректный статус доставки";
  }
} else {
  if (status === "экспресс") {
    price = "1500 руб";
  } else if (status === "обычная") {
    price = "800 руб";
  } else {
    price = "Некорректный статус доставки";
  }
}
console.log("Стоимость доставки: " + price);*/

/*let count = Number(prompt("Enter a starting number:"));
let limit = Number(prompt("Enter an ending number:"));
while (count <= limit){
    console.log("Count is: " + count);
    count = count + 1;
}*/

/*let a = Number(prompt());
let b = 1;
let limit = 10 * a;
while (b < limit){
    console.log(a*b);
    n2++;
}*/

/*let a = Number(prompt());
console.log(2**a);*/



/*homework*/

/* let a=Number(prompt());
let b=Number(prompt());
let count=0;
for(let i=b; i>=a; i--){
console.log(i)
}*/


/*let a=Number(prompt());
count=0;
for (let i = 1; i <= a; i += 2) {
count += i;
}
console.log(count);*/


/*let a=Number(prompt());
let b = 0;
let c = 0;
for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
       b++;
} else {
       c++;
   }
console.log("Четных чисел:" + b);
console.log("Нечетных чисел:" + c);*/


/*let a = Number(prompt());
let i=0;
while(a<=1000){
    a*=2;
    i++;
}
console.log("Итоговое число:" + a);
console.log("Количество итераций:" * i)*/


/*15.01.2026*/

/*function calculateSum(){
    let sum = 0;
    for (let i = 1; i <= 5; i++){
        sum += i;
    }
    console.log(sum);
}*/

/*function calculateSum(){
    let a = (prompt());
    let b = a ** 2 ;
    console.log(b);
}
calculateSum();*/


/*function getUserInfo(){
    let name = (prompt());
    let age = (prompt());

    console.log=("Привет," + name + "Тебе " + age + "лет");
}

getUserInfo();*/

/*function calculateSum() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    if (a > b) {
        console.log(a + " больше чем " + b);
    } else if (a < b) {
        console.log(b + " больше чем " + a);
    } else {
        console.log(a + " равен " + b);
    }
}

calculateSum();*/


/*function calculateSum(){
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = Number(prompt("Enter third number:"));
    let d = Number(prompt("Enter fourth number:"));

    if (a >= b && a >= c && a >= d) {
    console.log(a);
} else if (b >= a && b >= c && b >= d) {
    console.log(b);
} else if (c >= a && c >= b && c >= d) {
    console.log(c);
} else {
    console.log(d);
}

}

calculateSum();*/

/*function calculateSum(){
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = (prompt());
    function sum(a,b) {
        return a+b;
    }
    function minus(a,b) {
        return a-b;
    }
    function mult(a,b) {
        return a * b;
    }
    function division(a,b) {
        return a / b;
    }
    if ( c === "+"){
        console.log(sum(a,b));
    }
    else if ( c === "-"){
        console.log(minus(a,b));
    }
    else if ( c === "*"){
        console.log(mult(a,b));
    }
    else if ( c === "/"){
        console.log(division(a,b));
    }
    else{
        console.log("INVALID operation")
    }
}
calculateSum();*/


/*let brand = (prompt("Car brand:"));
let model =(prompt("Car model:"));
let car = {
    brand,
    model,
};
console.log(car.brand);
console.log(car.model);*/

/*let subj = prompt("Subject:");
let mark = prompt("Mark:");
let student = {
    subject: subj,
    mark: mark,
};
console.log("Специальность студента: " + student.subject);
console.log("Средний балл студента: " + student.mark);*/

/*let city = prompt("Место назначения:");
let date = prompt("Дата начала путешествия:");
let day = prompt("Длительность путешествия (в днях):");

let trip = {
    city: city,
    date: date,
    day: day,
};

console.log(trip.city);
console.log(trip.date);
console.log(trip.day);
console.log(trip.date + " вы отправляетесь в " + trip.city + " на " + trip.day + " дней");*/

/*let book = prompt("Название книги:");
let author = prompt("Автор книги:");
let date = prompt("Год издания книги:");

let info = {
    book: book,
    author: author,
    date: date,
};

console.log("Название книги:" + info.book);
console.log("Автор книги:" + info.author);
console.log("Год издания книги:" + info.date);*/

/*const person = {
    name:"Василий",
    age: 97,
    sayHello () {
        console.log("Hello");
    }
};*/

/*let a = +prompt();
let b = +prompt();
const x = {
    a,
    b,
    divide(){
        return a % b
    }
}
console.log(x.divide)*/

/* Task33
let gg = {
    number1: Number(prompt()),
    number2: Number(prompt()),
}
console.log(gg.number1 % gg.number2);
*/

/*let money = Number(prompt());

let bank = {
    showBalance: function(balance) {
        console.log("Ваш текущий баланс: " + balance + " долларов");
    }
};
bank.showBalance(money);*/

/*
let myObject = {
    base: 2,
    a: function (y) {
        return Math.pow(y - this.base, y);
    }
};
let y = Number(prompt("Введите число Y:"));
let result = myObject.a(y);
console.log("Результат:", result);


let bankAccount = {
    balance: 500,

    deposit: function (amount) {
        this.balance = this.balance + amount;
        return this.balance;
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            return "Недостаточно средств на счете";
        } else {
            this.balance = this.balance - amount;
            return this.balance;
        }
    }
};

let amount = Number(prompt("Введите сумму"));
let choice = prompt("Введите операцию: внести или снять");

if (choice === "внести") {
    alert(bankAccount.deposit(amount));
} else if (choice === "снять") {
    alert(bankAccount.withdraw(amount));
}*/

/*console.log("Да?\nАлё!\nда да?\nНу как там с \"деньгами\"?\nА?\nКак с \"деньгами\"-то там?\nЧё с \"деньгами\"?\nЧё");*/

/*const name = prompt();
const age = prompt();
const result = `Имя: ${name}, Возраст: ${age} лет`
console.log(result);*/

/*CalculateProfite*/

/*let money = Number(prompt("Доход:"));
let nomoney = Number(prompt("Расход:"));
const profit = {
    money,
    nomoney,
    divide() {
        return this.money - this.nomoney;
    }
};

const result = `Ваша прибыль составляет ${profit.divide()} рублей`;
console.log(result);*/

/*let product = (prompt());
let price = (prompt());
let quantity = (prompt());
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(price, quantity);

console.log(
    "Вы выбрали " + quantity + " товаров " + product + " по цене " + price + " рублей за штуку. Итого: " + total + " рублей");*/

/*function calculateTotal() {
    let product = prompt("Название товара:");
    let price = Number(prompt("Цена за штуку:"));
    let quantity = Number(prompt("Количество:"));

    console.log(
        "Вы выбрали " + product +
        " по цене " + price + " рублей за штуку.\n" +
        "Количество: " + quantity + " шт\n" +
        "Итого: " + (price * quantity) + " рублей"
    );
}

calculateTotal();*/

/*let a = prompt();

if ( a.length > 5){
    console.log (`${a}!`)
} else if (a.length < 5){
    console.log (`${a}?`)
}*/

/*let text = prompt("Введите строку:");
for (let i = 0; i < text.length; i++) {
    console.log(text[i].toLowerCase());
}*/

/*let text = prompt("Введите строку:");

if (text.length < 2) {
    console.log("Строка слишком короткая");
} else {
    console.log(text[text.length - 2] + text[text.length - 1]);
} */ 

/*const randomNum = Math.random(); */

/*const randomNum = Math.round(Math.random() * 10);
let minNumber = Math.min(5, 3, 9, 1, 7);
let maxNumber = Math.max(5, 3, 9, 1, 7);

console.log(minNumber); 
console.log(maxNumber); */

/*let users = [];
let name1 = prompt("Введите первое имя:");
let name2 = prompt("Введите второе имя:");
users.push(name1);
users.push(name2);
console.log(users);*/

/*let users = [];
let name1 = prompt();
let name2 = prompt();
let name3 = prompt();
users.push(name1, name2, name3);
console.log(users[0] , users[2]);*/

/*let arr = [];
let n = Number(prompt("Введите количество элементов массива:"));
for (let i = 0; i < n; i++) {
    let element = prompt("Введите элемент массива:");
    arr.unshift(element);
}
console.log(arr);*/

/*let text = prompt("Введите текст:"); 
let words = text.split(" "); 
let output = [];
let max = 4; 

for (let i = 0; i < words.length; i++) {
    let num = i + 1;
    if (num > max) num = max;
    output.push(num);
}

console.log(output.join("[,]"));*/

/*function calculateTotal(name, price, count) {
    let total = price * count;
    return Вы выбрали ${count} товаров "${name}" по цене ${price} рублей за штуку. Итого: ${total} рублей.;
}*/

/*function calculateTotal(name, price, count) {
    console.log(`Вы выбрали "${name}" по цене ${price} рублей за штуку.\nКоличество: ${count} шт.\nИтого: ${price * count} рублей.`);
}*/

/*let s = prompt();
if (s.includes('д') || s.includes('н')) {
    console.log(s.toUpperCase());
} else {
    console.log(s.toLowerCase());
}*/

/*let s = prompt();

if (s.startsWith('ж') || s.startsWith('Ж')) {
    console.log(s.length);
} else {
    console.log("Попробуйте снова");
}*/

/*let text = prompt();
let ch = prompt();
text = text.toLowerCase();
ch = ch.toLowerCase();
let count = 0;
for (let c of text) {
    if (c === ch) {
        count++;
    }
}
console.log(`Символ "${ch}" встречается ${count} раз(-а)`);*/

/*let s = prompt();
let result = s
    .toLowerCase() 
    .split('') 
    .reverse()
    .join('');

console.log(result);*/

/*let n = Number(prompt());
if (n < 0) {
    n = Math.abs(n);
}
let sqrt = Math.sqrt(n);
console.log(`Квадратный корень из ${n} равен ${sqrt}`);*/

/*let r = Number(prompt());
let S = Math.PI * r * r;
let result = Math.pow(S, 3);
console.log(Math.round(result));*/

/*const days = [
  "Понедельник","Вторник","Среда",
  "Четверг","Пятница","Суббота","Воскресенье"
];

const people = [
  { id: 1, name: "Иван", age: 30 },
  { id: 2, name: "Мария", age: 25 },
  { id: 3, name: "Алексей", age: 35 },
  { id: 4, name: "Елена", age: 28 }
];

const months = [
  "Январь","Февраль","Март","Апрель",
  "Май","Июнь","Июль","Август",
  "Сентябрь","Октябрь","Ноябрь","Декабрь"
];

const output = days.concat(people, months);

console.log(output);*/

/*let input = prompt();
let result = input.split(', ');
console.log(result);*/

/*let a = prompt("Введите данные через запятую и пробел");

let array = a
    .split(", ")
    .map(item => Number(item));

console.log(array.join(", "));*/

/*let a = prompt("Введите данные через запятую и пробел");

let array = a.split(", ").map(item => {
    let num = Number(item);
    if (!isNaN(num)) {
        return num;
    } else {
        return `"${item}"`;
    }
});

console.log(array.join(", "));*/

/*Homework*/
/*let array = prompt().split(", ");
let indexes = prompt().split(", ");
for (let i = 0; i < indexes.length; i++) {
  console.log(array[indexes[i]]);
}*/

/*let text = prompt().split(", ");
let indexes = prompt().split(", ");
let result=[];
for (let i of indexes) {
  result.push(text[i]);
}
console.log(result.join(' '))*/

// let a = Number(prompt());
// if (a === 1) {
//     console.log("Понедельник");
// } else if ( a === 2) {
//     console.log("Вторник");
// } else if ( a === 3 ){
//     console.log("Среда");
// } else if ( a === 4) {
//     console.log("Четверг");
// } else if (a === 5) {
//     console.log("Пятница")
// } else if ( a === 6) {
//     console.log("Суббота")
// } else if ( a === 6){
//     console.log("Воскресенье")
// } else {
//     console.log("Что-то пошло не так")
// }

// let input = prompt();
// let result = "";
// for (let i = 0; i < input.length; i += 2) {
//     result += input[i];
// }
// console.log(result);

// let a = prompt();
// if (a.length < 5){
//     console.log("Weak")
// } else if (a.length > 5) {
//     console.log("Strong")
// }

// let input = prompt("Введите числа через запятую и пробел:");
// let array = input.split(", ").map(Number);
// let evenNumbers = array.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// let input = prompt().toLowerCase();
// let vowels = "аеёиоуыэюя";
// let e = 0;
// function countVowel() {
//     while (e < input.length) {
//         if (vowels.includes(input[e])) {
//             console.log(input[e]);
//         }
//         e++;
//     }
// }
// countVowel();

// let a = prompt();
// let r = a.split("").reverse().join("");
// console.log (r);

// let a = prompt();
// let b = Number(prompt());
// b = b * 1.1;
// let c = { a,
//      b };
// console.log(c.a, c.b);

// let word1 = prompt("Введите первое слово:") || "";
// let word2 = prompt("Введите второе слово:") || "";
// function isAnagram(a, b) {
//     const cleanString = (str) => str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
//     const strA = cleanString(a);
//     const strB = cleanString(b);
//     if (strA.length !== strB.length) return false;
//     const sortedA = strA.split('').sort().join('');
//     const sortedB = strB.split('').sort().join('');
//     return sortedA === sortedB;
// }
// if (isAnagram(word1, word2)) {
//     console.log(`"${word1}" и "${word2}" — это анаграммы!`);
// } else {
//     console.log("Это не анаграммы.");
// }

// const dates = ["25.10.1917", "22.06.1941", "09.05.1945", "26.12.1991"];
// const years = dates.map(function(date) {
//   const parts = date.split(".");
//   return parts[2];
// });
// console.log(years.join(", "));

// const capitals = ["Афины" , "Астана", "Сеул", "Анкара", "Джакарта", "Москва"]
// let res = capitals.filter(capitals => capitals.startsWith("А"));
// console.log(res)

// let a = prompt();
// let b = a.split(" ");
// let c = 0;
// function capital() {
//     if (b.includes("Андорра-ла-Велла")) {
//         c = b.filter(city => city.endsWith("а"));
//         console.log("Города на 'а':", c);
//     } else {
//         c = b.filter(city => city.endsWith("н"));
//         console.log("Города на 'н':", c);
//     }
// }
// capital();

// const a = prompt();
// const arr = a.split(", ");
// const gb = arr.map(name => `Пока, ${name}`);
// console.log(gb);

// let cities = prompt();
// if (cities.includes(userInput)) {
//     let firstLetter = userInput[0];
//     let filteredCities = cities.filter(city => city.startsWith(firstLetter));
//     console.log(`Города, начинающиеся с буквы "${firstLetter}": ${filteredCities.join(", ")}`);
// } else {
//     console.log("Такого города нет в списке");
// }

// const numbers = prompt();
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// const average = sum / numbers.length;
// const result = numbers.filter(number => number > average);
// console.log("Среднее значение:", average);
// console.log("Результат:", result);

// let alpha = [];
// let beta = prompt().toLowerCase();
// alpha = beta.split(" ");
// let a = "admin";
// let e = 0;
// function countVowel() {
//     while (e < alpha.length) {
//         if (a.includes(alpha[e])) {
//             console.log(`слово ${alpha[e]} запрещено`);
//         }
//         e++;
//     }
// }
// countVowel();

// const marks = prompt();
// const results = marks.map(mark => mark >= 60 ? "pass" : "fail");
// console.log(results);

// const items = [
//   { name: "Laptop", price: 120000 },
//   { name: "Mouse", price: 3000 },
//   { name: "Phone", price: 90000 }
// ];
// const expensiveNames = items
//   .filter(item => item.price > 5000)
//   .map(item => item.name);
// console.log(expensiveNames);

// const fruits = prompt();
// const vowelLetters = "аеёиоуыэюя";
// const vowelFruits = fruits.filter(fruit => 
//   vowelLetters.includes(fruit[0].toLowerCase())
// );
// console.log(vowelFruits);

// const str = "2, 5, 10";
// const nums = str.split(",").map(Number);
// const squared = nums.map(n => n ** 2);
// console.log(squared);

// const words = prompt();
// const long = words.filter(word => word.length > 5);
// console.log(long);

// const arr = [10, -5, 0, 3, -1];
// const symbols = arr.map(n => {
//   if (n > 0) return "+";
//   if (n === 0) return "0";
//   return "-";
// });
// console.log(symbols);

// const list =  prompt();
// const reversed = list.map(word => 
//   word.split("").reverse().join("")
// );
// console.log(reversed);


let a = Number(prompt());

console.log(Math.max(a));

let a = Number(prompt());

if (a % 3 === 0 && a % 5 === 0){
    console.log("Fizzbuzz")
} else if ( a % 3 === 0) {
    console.log("Fizz")
} else if ( a % 5 === 0 ){
    console.log("Buzz")
}

let login = prompt("Login");

let password = prompt("Password");

if (login === "admin" && password === "1234"){
    console.log(`Welcome, ${login}`)
} else if ( login === "user" && password === "0000") {
    console.log(`Welcome,${login}`)
} else {
    console.log("Acces denied")
}

let a = prompt();

console.log(a.length);

let arr = [5, -3, 10, -1, 8];

let result = arr.filter(num => num >= 0);

console.log(result);

let a = Number(prompt());

if (a % 4 === 0) {
    console.log("Високосный")
} else {
    console.log("не високосный")
}

const message = document.getElementById("message");
const btn = document.getElementById("btn");
const stylebtn = document.getElementById("stylebtn")

console.log("message element:", message);
console.log("button element:", btn);
console.log("style button element", stylebtn);

btn.addEventListener("click", () => {
    message.textContent = "Hello Yo clickefsefkse";
});

stylebtn.addEventListener("click", () => {
    message.style.fontSize = "32px";
    message.style.border = "2px solid red";
});

const message = document.getElementById("message");
const btn = document.getElementById("btn");
const stylebtn = document.getElementById("stylebtn")
const toggleBtn = document.getElementById("toggleBtn");

console.log("message element:", message);
console.log("button element:", btn);
console.log("style button element", stylebtn);

btn.addEventListener("click", () => {
    message.textContent = "Hello Yo clickefsefkse";
});

stylebtn.addEventListener("click", () => {
        message.style.fontSize = "32px";
        message.style.border = "2px solid red";
});

toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});

const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    title.style.color = "red";
    title.textContent = "jlkdsfl";
});

const text = document.getElementById("text");
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", () => {
    text.style.color = "red";
    text.style.fontSize = "60px";
})

const text = document.getElementById("text");
const Sbtn = document.getElementById("Sbtn");

Sbtn.addEventListener("click", () => {
    text.classList.toggle("big");
});

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    text.classList.toggle("off");
    text.textContent = "REGIME : ON";
})

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    text.classList.toggle("hidden");
})

const message = document.getElementById("message");
const btn = document.getElementById("btn");
const styleBtn = document.getElementById("styleBtn");
const toggleBtn = document.getElementById("toggleBtn");
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
const text = document.getElementById("text");
const style = document.getElementById("style");

console.log("message element:", message);
console.log("btn element:", btn);

btn.addEventListener("click", () => {
    message.textContent = "s;fkd;"
});

styleBtn.addEventListener("click", () => {
    message.style.color = "red";
    message.style.backgroundColor = "blue";
    message.style.padding = "20px";
    message.style.fontSize = "32px";
    message.style.border = "10px solid black"
});
toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";

    }
});
changeBtn.addEventListener("click", () => {
    title.style.color = "blue";
    title.style.border = "3px solid blue";
    title.style.backgroundColor = "black"
});
style.addEventListener("click", () => {
    text.style.color = "green";
    text.style.fontSize = "22px";
    text.style.textAlign = "center"
});
const text1 = document.getElementById("text1");
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    text1.classList.toggle("hidden");
});
const text2 = document.getElementById("text2");
const sizeBtn = document.getElementById("sizeBtn");

sizeBtn.addEventListener("click", () => {
    text2.classList.toggle("big");
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});

const text3 = document.getElementById("text3");
bt.addEventListener("click", () => {
    text3.textContent = "Status:ON";
    text3.classList.toggle("on")
});
const war = document.getElementById("war");
cl.addEventListener("click", () => {
    war.classList.toggle("hidden")
});

const card = document.getElementById("card");

sel.addEventListener("click", () => {
    card.style.backgroundColor = " #eef0ff";
    card.style.border = "2px solid #5357b6";
    card.style.boxShadow = "0 10px 25px rgba(83, 87, 182, 0.3)";
    card.classList.toggle("selected")
});

const hello = document.getElementById("hello");
const com = document.getElementById("com");

com.addEventListener("click", () => {
    hello.style.padding = "20px";
    hello.style.fontSize = "25px";
    hello.style.border = "3px solid pink";
    hello.style.textAlign = "center";
});

const mes = document.getElementById("mes");
const one = document.getElementById("one");

one.addEventListener("click", () => {
    mes.classList.toggle("hidden");
    mes.style.textAlign = "center";
    mes.style.fontSize = "40px";
    mes.style.color = "pink";
});

const like = document.getElementById("like");
like.addEventListener("click", () => {
    like.textContent = "Liked";
});

const kor = document.getElementById("kor");
const dlin = document.getElementById("dlin");
const read1 = document.getElementById("read1");
const read2 = document.getElementById("read2");


const lock = document.getElementById("locked");
const unlock = document.getElementById("unlock");

unlock.addEventListener("click", () => {
    lock.classList.toggle("unlocked");
    lock.textContent = "uncloked";
})

const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const hides = document.getElementById("hides");

hides.addEventListener("click", () => {
    card2.classList.toggle("hidden");
    card3.classList.toggle("hidden");
    card4.classList.toggle("hidden");
})

const dwnl = document.getElementById("dwnl");
const download = document.getElementById("download");

download.addEventListener("click", () => {
    dwnl.textContent = "downloading...";
})

const form = document.getElementById("myform");
const input = document.getElementById("input");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") {
    result.textContent = "Name is required";
} else {
    result.textContent = "Form submitted"
}

})

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
e.preventDefault();
result.textContent =
"Name:" + nameInput.value + ", Age: " + ageInput.value;
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.textContent = "Submit: " + input.value;
});

btn.addEventListener("click", () => {
    console.log("Button clicked");
});

const agree = document.getElementById("agree");
const result = document.getElementById("result");
agree.addEventListener("change", () => {
result.textContent = agree.checked;
});

const male = document.getElementById("male");
const female = document.getElementById("female");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
if (male.checked) {
result.textContent = male.value;
} else if (female.checked) {
result.textContent = female.value;
}
});

const agree = document.getElementById("agree");
const result = document.getElementById("result");
const text1 = document.getElementById("text1");

agree.addEventListener("change", () => {
    result.textContent = agree.checked;
    if (agree.checked) {
        text1.textContent = "Thank you fur deine attention";
    } else {
        text1.textContent = "";
    }
});

const male = document.getElementById("male");
const female = document.getElementById("female");
const result = document.getElementById("result");

female.addEventListener("change", (e) => {
result.textContent = female.value;
});

male.addEventListener("change", (e) => {
result.textContent = male.value;
});

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => { box.classList.add("highlight");
});

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => { box.classList.toggle("hidden");
});

const input = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if (input.value === "") {
        input.classList.add("error");
        input.classList.remove("success");
    } else {
        input.classList.add("success");
        input.classList.remove("error");
    }
});

let count = 0;
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const countEl = document.getElementById("count");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
});

plusBtn.addEventListener("click", () => {
    if (count >= 10) return;
    count++;
    countEl.textContent = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    countEl.textContent = count;
});

const cards = document.getElementById("cards");

cards.addEventListener("click", function (event) {
    if (event.target.classList.contains("card")) {
        event.target.style.background = "lightblue";
    }
});

let total = 0;
const box =  document.getElementById("box");
const result = document.getElementById("result");

box.addEventListener("click", function(event) {
    if (event.target.tagName !== "BUTTON") return;
        const number = Number(event.target.dataset.number);
        total += number;
        result.textContent = total;
});


const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

function openModal() {
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
}
function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Закрытие по клику вне окна
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
    closeModal();
}
});

// Закрытие по Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
    closeModal();
    }
});

const menu = document.getElementById("menu");
const pages = document.querySelectorAll(".page");
menu.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        document.querySelectorAll("#menu li").forEach(function(item) {
            item.classList.remove("active");
    });
    event.target.classList.add("active");

    const pageName = event.target.dataset.page;

    pages.forEach(function(section) {
        section.classList.remove("active-page");
            if (section.dataset.content=== pageName) {
            section.classList.add("active-page");
            }
        });
    }
});

const students = ["Ali", "Dana", "Aruzhan"];

const list = document.querySelector("#list");

students.forEach(function(name) {
    list.innerHTML += `<li> ${name} </li>`;
});

const students = [
    {name: "Ali", course: 2},
    {name: "Dana", course: 1},
    {name: "Aruzhan", course: 3}
];

const list = document.querySelector("#list");
const search = document.querySelector("input");

function render(arr) {
    list.innerHTML = "";

    arr.forEach(function(student) {
        list.innerHTML += `
        <li>
        ${student.name}
        </li>`;
    });
}

render(students);

search.addEventListener("input", function() {
    const value = search.value.toLowerCase();

    const filtered = students.filter(function(student) {
        return student.name.toLowerCase().includes(value);
    });
    
    render(filtered);
});

const students = ["Ali", "Dana", "Aruzhan", "Nursultan", "Madi", "Aigerim"];
const original = [...students];
const list = document.querySelector("#list");
const azBtn = document.querySelector("#az");
const zaBtn = document.querySelector("#za");
const resetBtn = document.querySelector("#reset");

function render(arr) {
    list.innerHTML = "";
    arr.forEach(function(name) {
        list.innerHTML += `<li>${name}</li>`;
    });
}

render(students);

azBtn.addEventListener("click", function() {
    const sorted = [...students].sort();
    render(sorted);
});

zaBtn.addEventListener("click", function() {
    const sorted = [...students].sort().reverse();
    render(sorted);
});

resetBtn.addEventListener("click", function() { 
    render(original); 
});