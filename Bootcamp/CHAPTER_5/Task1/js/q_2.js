let inp1 = document.querySelector('.num1');
let inp2 = document.querySelector('.num2');
let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let res = 0;
    for(let i = 0; i<inp2.value.length; i++){
        if(inp2.value[i] == inp1.value)res++;
    }
    alert(`В строке-${inp2.value} число-${inp1.value} встречается ${res}-раз`);
})