let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let inp3 = document.querySelector('.inp3');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let a = +inp1.value;
    let b = +inp2.value;
    let c = +inp3.value;

    for(let i=a; i<=b; i++){
        if(i%c==0){
            console.log(i)
        }
    }

});


