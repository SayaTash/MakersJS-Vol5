//// 1)-------------------------------------------------------
// function arg(){
//     console.log(...arguments);
// }
// arg(13, 35, 'Hello');

// 2)--------------------------------------
// let numb = +prompt('Введите число:')
// let factor = 1;
// let funcFactor = function(num, i=1) {
//     if (i <= num){
//         factor *= i;
//         funcFactor(num, i+1);
//     }
//     return factor;
// }
// console.log(funcFactor(numb));

// let factor = function(n){
//     return n===1 ? 1 : n*factor(n-1)
// }
// console.log(factor(numb));

// 3)-----------------------------------------------
// let num = +prompt('Введите порядковый номер:');
// let fib = function(n) {
//     if (n <= 1) return n;
//     else {
//         n = fib(n-1)+fib(n-2);
//     }
//     return n
// }
// console.log(fib(num))

// 4)------------------------------------------
// let num = +prompt('Введите температуру:');
// let C_to_F = function(c) {
//     let f = 1.8 * c + 32;
//     return f;
// }
// console.log(C_to_F(num));

// 5)------------------------------------------
// let num = +prompt('Введите число:');
// let diap1 = function(n){
//     let mas = [];
//     if (n>0) for (let i = 1; i<=n; i++) mas.push(i);
//     else for (let i = 1; i>=n; i--) mas.push(i);
//     return mas.join();
// }
// console.log(diap1(num));

// 6)-----------------------------------------
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


// 7)-----------------------------------------------
// let vrem = +prompt('Введите часы:');
// let time2 = function(h, i=0){
//     return i < h && Number.isInteger(h) ? h * 3600 : 'Введите числовой тип, больше чем 0'
// }
// console.log(`In ${vrem}-hour ${time2(vrem)}-seconds.`)

// 8)-------------------8-------------------------
// let num1 = +prompt('Введите first')
// let num2 = +prompt('Введите second')

// let del = function(first, second){
//     return first%second === 0 ? console.log('true') : console.log('false');
// }

// del(num1, num2);

// 9)

let obj = {
    floor: 1,
    maxFloor: 16,
    minFloor: 1,

    toFloor: function(num){
        
            if (num<=this.maxFloor && num>=this.minFloor){
                if (this.floor == num){
                    print();
                }
                if(this.floor<=num){
                    up();
                }
                if(this.floor >= num){
                    down();
                }
            }
            toFloor();
        
    },
    print: function(){
        console.log(this.floor);
    },
    up: function(){
        this.floor++
        print();    },
    down: function(){
        this.floor--
        print();
    }
}
obj.toFloor(4)