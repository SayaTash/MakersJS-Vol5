let inp = document.querySelector('input');
let btn = document.querySelector('button');
let arr = [];

btn.addEventListener('click', ()=>{
    let sum = 0;
    // arr.push(inp.value);
    for(let i = 0; i<inp.value.length; i++){
        sum += +inp.value[i];
    }
    alert(sum);

})