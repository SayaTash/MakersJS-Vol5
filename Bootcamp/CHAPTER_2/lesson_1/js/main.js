//Clousure - Замыкание = дочерная функция ссылается на область видомости родительской функции

const parentFunc = function() {
    let i = 0;
    const childFunc = function() {
        i++;
        console.log(i)
    }
    return childFunc;
}

const iterationFunc = parentFunc();

iterationFunc();
iterationFunc();
console.log(i);//Ошибка i не глобальная переменная

//Recursion - Рекурсия = Это функция которая вызывает саму себя
 
const cyrcle = function(arr, i=0) {
    if (i < arr.length) {
        console.log(arr[i]);
        cyrcle(arr, i + 1);
    }else return null;
}

cyrcle(['Jack', 'Jim', 'Doe']);

//Распоковка многомерного массива

const arrNums = [1, [2], [[3], [4]]];
const newArr = [];

const arrToFloat = function(arr, i=0) {
    if (i >= arr.length) return;

    if (Array.isArray(arr[i])) arrToFloat(arr[i]);
    else newArr.push(arr[i]);

    arrToFloat(arr, i + 1);
}
arrToFloat(arrNums);
console.log(newArr);

const arrNums = [1, [2], [[3], [4]]];
console.log(arrNums.flat(Infinity));//Тот же самый результат