// let mas = [];
// for (let i=1; i<100;i++){
//     mas.push(i);
//     if(i%3==0 && i%5==0){
//         console.log(`for ${i}`)
//     }
//     // console.log('no')
// }
/////-----------------------------------------------
// mas.forEach(i=>{
//     if(i%3==0 && i%5==0){
//         console.log(`forEach ${i}`)
//     } 
// })
/////-----------------------------------------------
// let arr = [2,3,4,5];
// let num = 1;
// newArr = arr.map(i=>{
//     num = i*num;
// })
// console.log(num);
////-------------------------------------------
// let arr = [23,11,0,1,45,15];
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

// arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr);
////----------------------------------------------
let i=1;
function num(n){
    if(n<=20) return
    console.log(n);
    num(n+1);
}
num(i);