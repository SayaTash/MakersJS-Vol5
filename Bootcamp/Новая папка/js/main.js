
let btn = $('.btn');
let name = $('#name');
let surname = $('#surname');
let number = $('#number'); 


// $(window).ready(function(){
//   render();
// })

btn.on('click', function(){
    let obj = {
        name: name.val(),
        surname: surname.val(),
        number: number.val(),

    }

    $.ajax({
        type:"post", //
        url:'http://localhost:8000/tasks', //ссылка
        data: obj, //что мы отправляем
        success: function( data ){ //ловит ответ от бекенд
        $('.list').append(`<li><span>${data.id}.</span>${data.name} ${data.surname} ${data.number}</li>`)  
        //   render()
        },
        error: function(err){ //ловит ошибку
          console.log(err);
        }
      })

    // inp.val('')

});


// function render(){
//   $('.list').html('')
//     $.ajax({
//         type:"get", //
//         url:'http://localhost:8000/tasks', //ссылка
//         success: function( data ){ //ловит ответ от бекенд
//           data.map(item=>{
//             $('.list').append(`
//             <li>
//                 <span>Задача №${item.id}</span> - ${item.task}
//             </li>
//         `)
//           })
//         },
//         error: function(err){ //ловит ошибку
//           console.log(err);
//         }
//       })


// }

//выбираем все теги с именем  modal
$('a[name=modal]').click(function(e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    //Получаем тег A
    var id = $(this).attr('href');
    //Получаем ширину и высоту окна
    var winH = $(window).height();
    var winW = $(window).width();
    //Устанавливаем всплывающее окно по центру
    id.css('top', winH/2-id.height()/2);
    id.css('left', winW/2-id.width()/2);
    //эффект перехода
    id.fadeIn(500);
});
//если нажата кнопка закрытия окна
$('.modalwindow .close').click(function (e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    $('.modalwindow').fadeOut(500);
});