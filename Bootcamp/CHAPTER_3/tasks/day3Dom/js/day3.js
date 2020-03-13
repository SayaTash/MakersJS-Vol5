let btnBgColor = document.querySelector('.btn1');
btnBgColor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'aqua';
})

let btn2 = document.querySelector('.btn2');
let inVal = document.querySelectorAll('input');
let mas = [];
btn2.addEventListener('click', function(){
    inVal.forEach(function(item){
        if (item.value=="") mas.push(false);
        else mas.push(true);
    });
    let result = mas.reduce((a,b)=>a*b)
    result ? alert('OK') : alert('NO')
    mas = [];
    // console.log(mas);
});
