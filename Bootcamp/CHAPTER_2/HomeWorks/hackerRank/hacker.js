function insertionSort1(n, arr) {
    const val = arr[n - 1];
    let i = n - 1;
    
    while (arr[i] >= val) {
        arr[i] = arr[--i];   
        if (arr[i] >= val) console.log(arr.join(' '));
    }
    
    arr[i + 1] = val;
    console.log(arr.join(' '));
}
let mas = [1,2,4,5,3];
let num = 5;
insertionSort1(num, mas);


// function powerSum(X, N, exponentIncrement = 1) {
//     let exponentVal = X - Math.pow(exponentIncrement, N);
//     if (exponentVal < 0) return 0;
//     else if (exponentVal === 0) return 1;
//     else return powerSum(exponentVal, N, exponentIncrement + 1) + powerSum(X, N, exponentIncrement + 1);
// }

// console.log(powerSum(10, 2));