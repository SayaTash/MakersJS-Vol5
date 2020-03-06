// //Clousure - Замыкание = дочерная функция ссылается на область видомости родительской функции

// const parentFunc = function() {
//     let i = 0;
//     const childFunc = function() {
//         i++;
//         console.log(i)
//     }
//     return childFunc;
// }

// const iterationFunc = parentFunc();

// iterationFunc();
// iterationFunc();
// console.log(i);//Ошибка i не глобальная переменная

// //Recursion - Рекурсия = Это функция которая вызывает саму себя
 
// const cyrcle = function(arr, i=0) {
//     if (i < arr.length) {
//         console.log(arr[i]);
//         cyrcle(arr, i + 1);
//     }else return null;
// }

// cyrcle(['Jack', 'Jim', 'Doe']);

// //Распоковка многомерного массива

// const arrNums = [1, [2], [[3], [4]]];
// const newArr = [];

// const arrToFloat = function(arr, i=0) {
//     if (i >= arr.length) return;

//     if (Array.isArray(arr[i])) arrToFloat(arr[i]);
//     else newArr.push(arr[i]);

//     arrToFloat(arr, i + 1);
// }
// arrToFloat(arrNums);
// console.log(newArr);

// const arrNums = [1, [2], [[3], [4]]];
// console.log(arrNums.flat(Infinity));//Тот же самый результат





// lesson_2 
// пт_06.03
// Метод includes - находит подстроку в строке
// const str = 'Hello world';
// console.log(str.includes('world'));

//--------------indexOf---------------------indexOf----------indexOf
//Медот indexOf - возвращает индекс первого найденный элемент 
// const str = 'Hello world, welcome to Mekers';
// console.log(str.indexOf('welcome'));


// Мктод split возвращает массив -----------------split---------
// const str = 'How are you doing today?'
// console.log(str.split(' ', 3)); //


// Метод substr-----------------substr----substring------------
// const str = 'Hello world'
// console.log(str.substr(1, 4));
// // Метод substring
// console.log(str.substring(1, 4));

// //Шаблоны строк ----------------Шаблоны строк ------------ 
// const name = 'John';
// const age = 20;
// const sex = 'male';
// //es5 
// const personEs5 = 'name: '+name + ' age: '+age +' sex: '+sex;
// // es6
// const personEs6 = `name: ${name} age: ${age} sex: ${sex}`

// console.log(personEs5);
// console.log(personEs6);

//-------------------------экранирование----------------------экранирование
// // знак экранирование - \
// const message = 'Hello! \nI\'m John \
// and I love this \\(-_-)/'
// console.log(message);

//RegExp - регулярные выражение ------------RegExp-----------RegExp
// g - global
// i - ignor registr
// m - многосточный
// const regExp1 = /./g;
// const regExp2 = new RegExp('l', 'g');
// const regExp3 = new RegExp(/l/, 'g');
// const regExp4 = RegExp(/l/, 'g');
// let str = 'HelLo world';
// const result = str.replace(regExp1, '#');
// console.log(result);


// const str = 'Please open the book on page №7'
// console.log(str.match(/\d/gi));     // \d - любая цифра
// console.log(str.replace(/\w/gi, '#')); // \w - 
// console.log(str.replace(/\s/gi, '_'));     // \s
// console.log(str.replace(/\D/gi, '#'));     // \D
// console.log(str.replace(/\W/gi, '#'));     // \W - 
// console.log(str.replace(/\S/gi, '#'));     // \S - кроме пробеле 

// const str = 'Please open the book on page №7';
// console.log(str.replace(/[A-Za-z]/g, '*'));     // замена всех букв от A-Z
// console.log(str.replace(/[a-j]/gi, '*'));     // замена всех букв от a-j
// console.log(str.replace(/[^a-j]/gi, '*'));     // замена всех букв кроме a-j
// console.log(str.replace(/[^\w|\s]/gi, ''));     // 
// console.log(str.replace(/[a|b]/gi, '*'));     // замена а и b на *


// const str = 'Unix time 01.01.1970'//----------------Date--
// const result = str.match(/\d{2}\.\d{2}\.\d{4}/gi);
// console.log(result);

// const phone1 = '+380951112233';
// const phone2 = '+38 (095) 111 22 33'
// const simplePhoneRegExp = /^\+?(\d+\s?((\(\d+\))|(\d{3}))\s?\d{3}\s?\d{2}\s?\d{2})$/
// console.log(simplePhoneRegExp.test(phone1));
// console.log(simplePhoneRegExp.test(phone2));


//Task3-----------Task3---------Task3-----------Task3----------Task3
//1
// const myEmail = prompt('Введите email')   //'taalaibekov@mail.com'
// const emailRegExp1 = /\w+@\w+\.\w+/
// const emailRegExp2 = /\w{1,}@\w{1,}\.\w{1,}/
// console.log(emailRegExp1.test(myEmail));
// console.log(emailRegExp2.test(myEmail));

//2
// let myNum = prompt('Введите номер')  //'+1 311 78901';
// let numReg = /^\+\d{1,3}\s?\d{3,4}\s?\d{2,6}\s?\d{2,3}\s?\d{0,2}$/
// console.log(numReg.test(myNum));
// console.log(myNum.slice(0,4));

//3
// const str = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060'
// console.log((str.match(/\d+/g)));


//4
// const str = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году. Номер телефона +996700405060'
// console.log(str.match(/[А-Я]/g));
