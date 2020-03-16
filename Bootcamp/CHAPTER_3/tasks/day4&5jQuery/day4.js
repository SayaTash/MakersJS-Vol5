let body = $('body');
let head = $('head');
body.append(`
<button class="btnColor">Поменять фон jQuery</button>
`);
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






