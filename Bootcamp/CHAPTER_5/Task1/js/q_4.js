let inp = document.querySelector('input');
let btn = document.querySelector('button');
let arr =[];

btn.addEventListener('click',()=>{
    let val = +inp.value;
    for (let i = 0; i<val; i++){
        arr.push(Math.floor(Math.random()*50));
    }
    console.log(`Массив с случайными числами-${arr}`);
    let maxNum = Math.max.apply(null, arr);
    let minNum = Math.min.apply(null, arr);
    console.log(`Максимальный элемент-${maxNum}`);
    console.log(`Минимальный элемент-${minNum}`);
    let inMax = arr.indexOf(maxNum)
    let inMin = arr.indexOf(minNum)
    let m = arr[inMax];
    arr[inMax] = arr[inMin];
    arr[inMin] = m;
    console.log(`Поменял местами max и min-${arr}`)
    // arr=[];
})