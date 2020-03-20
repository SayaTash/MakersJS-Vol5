//// 1)---------------------------1-----------------------1----------------------------
// function arg(){
//     console.log(...arguments);
// }
// arg(13, 35, 'Hello');

// 2)-------------------------2-------------------------2-------------
let numb = +prompt('Введите число:')
let factor = 1;
let funcFactor = function(num, i=1) {
    if (i <= num){
        factor *= i;
        funcFactor(num, i+1);
    }
    return factor;
}
console.log(funcFactor(numb));

let factor = function(n){
    return n===1 ? 1 : n*factor(n-1)
}
console.log(factor(numb));

// 3)-------------------3--------------------------3----------------------------
// let num = +prompt('Введите порядковый номер:');
// let fib = function(n) {
//     if (n <= 1) return n;
//     else {
//         n = fib(n-1)+fib(n-2);
//     }
//     return n
// }
// console.log(fib(num))

// 4)------------------------4--------------------------4------------------
// let num = +prompt('Введите температуру:');
// let C_to_F = function(c) {
//     let f = 1.8 * c + 32;
//     return f;
// }
// console.log(C_to_F(num));

// 5)---------------------------5--------------------5---------------
// let num = +prompt('Введите число:');
// let diap1 = function(n){
//     let mas = [];
//     if (n>0) for (let i = 1; i<=n; i++) mas.push(i);
//     else for (let i = 1; i>=n; i--) mas.push(i);
//     return mas.join();
// }
// console.log(diap1(num));

// 6)-----------------6------------------------------6------------------------
// let vr = +prompt('Введите время:')
// let time = function(min){
//     if (Number.isInteger(min) && min>=0 && min<=60){
//         if (min<=15){
//             return 'Первая'
//         }
//         else if (min>=16 && min<=30){
//             return 'Вторая'
//         }
//         else if (min>=30 && min<=45){
//             return 'третвея'
//         }
//         else if (min>=45 && min<=60){
//             return 'четвертая'
//         }
//     }
    // else console.log('Введите числовой тип от 1 до 60');
// }
// console.log(time(vr))


// 7)--------------------------7------------------------------7------------
// let vrem = +prompt('Введите часы:');
// let time2 = function(h, i=0){
//     return i < h && Number.isInteger(h) ? h * 3600 : 'Введите числовой тип, больше чем 0'
// }
// console.log(`In ${vrem}-hour ${time2(vrem)}-seconds.`)

// 8)-------------------8---------------8---------------------8----------
// let num1 = +prompt('Введите first')
// let num2 = +prompt('Введите second')

// let del = function(first, second){
//     return first%second === 0 ? console.log('true') : console.log('false');
// }

// del(num1, num2);

// 9)----------------------9-------------------------9------------
// const elevator = {
//     floor: 1,
//     maxFloor: 16,
//     minFloor: 1,

//     toFloor: function(num){
//         this.print();
//         if (num==this.floor)return;
//         if (num<this.minFloor||num>this.maxFloor){
//             console.log('intput is wrogn');
//             return;
//         }
//         if (num>this.floor)this.up();
//         else if(num<this.floor)this.down();
//         elevator.toFloor(num);
//     },
//     print: function(){
//         console.log(`Elevator is on the floor: ${this.floor}`)
//     },
//     up: function(){
//         this.floor++;
//     },
//     down: function(){
//         this.floor--;
//     }
// }
// elevator.toFloor(4);

// 1)------------task3--------------task3----------1----------
// let inp = prompt('Email');
// let validate = function(email){
//     let val = false;
//     for(let i=0; i<email.length; i++){
//         if (email[i]==='@') {
//             val = true;
//         }
//         else val = false;
//     }
//     return val;
// }
// alert(validate(inp));
//----1-------------------------1-------------
// let valEmail = function(email){
//     emailReg = /^\w+@\w+\.\w+$/;
//     return emailReg.test(email);
// }
// let mail = prompt('Введите email');
// console.log(valEmail(mail));
//-
//2)-----------------------------2-------------2----
// let valNum = function(num){
//     numReg = /^(\+\d{1,3}\s?)|0\d{3,4}\s?\d{2,3}\s?\d{2,3}\s?\d{2}?$/;
//     if(num[0]=='+')console.log(`Код страны ${num.slice(0,4)}`);
//     return numReg.test(num);
// }
// let myNum = prompt('Введите номер');
// console.log(valNum(myNum));

//3)--------------------3-----------------------3----------
// let nums = function(string){
//     return string.match(/\d+/g)
// }
// let str = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060';
// console.log(nums(str));


// 4)----------------4-----------------4--------------------4
// let char = function(ch){
//     return ch.match(/[А-Я]/g);
// }
// let str = 'Все Заглавные Буквы.'
// console.log(char(str))
//-------------------------------------

// let str = "How Eh ok Lowor Lower Ohhh";
// let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let res = str.split('').filter(function(l){
//     return ~caps.indexOf(l);
// });
// alert(res);


// let product=1;
// let mas = [2,5,9,15,0,4];
// for (let i = 0; i<mas.length; i++){
    // if(mas[i]>3 && mas[i]<10) {
    //     console.log(mas[i])
    // }
// }
// mas.map(function(item){
//     if(item>3 && item<10) {
//         console.log(item)
//     }
// })
// mas.forEach(function(item){
//     if(item>3 && item<10) {
//         console.log(item)
//     }
// })

// let filterArr = mas.filter(function(item){
//     return item>3 && item<10
// })
// console.log(filterArr)

// mas.sort(function(a, b){
//     return b - a;
// })
// console.log(mas)

// let newArr = [];
// for (let key in console){
//     console.log(key, console[key]);
// }

// let arr = Object.keys(console);
// newArr.sort((a,b) => (a.length - b.length));
// let newArr = arr.map(item=> (item.toUpperCase()) )
// console.log(newArr)


// let mas = ['вс','пн','вт', 'ср', 'чт','пт','сб'];
// let day = mas[new Date().getDay()];
// mas.forEach(function(item){
//     console.log(item)
// })
// console.log(`Сегодня: ${day}`);
 
// let mounth = prompt('Введите число');
// if(mounth>=3&&mounth<=5){
//     console.log('Весна');
// }
// else if(mounth>=6&&mounth<=8){
//     console.log('Лето');
// }
// else if(mounth>=9&&mounth<=11){
//     console.log('Осень');
// }
// else if(mounth==12||mounth==1||mounth==2){
//     console.log('Зима');
// }

// let lang = prompt();
// let arr = [];
// if(lang=='ru'){
//     arr= ['вс','пн','вт', 'ср', 'чт','пт','сб'];
// }
// else if(lang=='en'){
//     arr= ['mon','ts','wd', 'th', 'fr','sat','sun'];
// }
// console.log(arr)


// let a =+prompt();
// let b= +prompt();
// if (a<=1&&b>=3)console.log(a+b);
// else console.log(a-b);
















