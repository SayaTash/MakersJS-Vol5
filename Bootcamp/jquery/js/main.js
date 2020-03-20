//let = $('h1');
// let heading = $('.heading');
// // heading.text('Hello Fais')//меняет
// console.log(heading.text())//возврат
// heading.html('<span>HelloEmir</span>')
// console.log(heading.html())




// let inp = $('.input');

// inp.val()
// ""
// inp.val('kubik'); //меняет значение
// inp.val() //дастает значение
// "2020-03-12"
// inp.addClass('hello') 
// inp.removeClass('hello')
// inp.toggleClass('hello') //переключает класс
// inp.addAttr('disabled') 
// inp.removeAttr('disabled') //
// inp.attr('type','number') //меняет значение atributa type на number


// box.css('background', 'red')

// let num = prompt();
// let i=0;
// setInterval(function(){
//     if (num==i){
//         return
//     }
//     else if(num>=i){
//         i++;
//     }
//     toggleColor();
// }, 100)


let box = $('.box');
// box.click(toggleColor)
box.mousemove(toggleColor)

function toggleColor(){
    let randomNum = Math.floor(Math.random()*255*255*255);
    let num16 = randomNum.toString(16)
    box.css('background', `#${num16}`)
}






