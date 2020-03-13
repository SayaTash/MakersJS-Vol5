let body = $('body');
let head = $('head');
body.append(`
<button class="btnColor">Поменять фон jQuery</button>
`)
let btnColor = $('.btnColor');
btnColor.on('click', function(){
    head.append(`
        <style>
            .bodyColor{
                background-color: aqua;
            }
        </style>
    `)
    body.toggleClass('bodyColor');
});

//required
body.append(`
    <form>
        <input class="inps" type="text"> 
        <input class="inps" type="text">
        <input class="inps" type="text">
        <button class="btnOk">in</button>
    </form>
`)
//function
let inps = $('.inps');
let mas = [];
body.on('click', '.btnOk', function(e){
    inps.each(function(){
        if($(this).val()==''){
            e.preventDefault();
            mas.push(false);}
        else mas.push(true);
    });
    let result = mas.reduce(function(a,b){
        return a * b;
    })
    console.log(mas)
    mas=[];
    alert(result > 0 ? true : false)
})






