$(window).ready(function(){//после загрузки window 
    render() //вызываем функцию render()
  })
  
let inpName = $(".fName");// 1-input Имя
let inpSurname = $(".lName");// 2 input Фамилия
let inpNum = $(".telNum");//3-input Номер
let btnAdd = $(".add");//Кнопка добавления


//-------------------------------Добавление-----------------------------
btnAdd.on("click", function(e) {
  e.preventDefault();
  if(inpName.val()!=='' && inpNum.val()!==''){
    let obj = {//Этот объект отправляется в json-server и сохраняетсяв файле db.json
      name: inpName.val(), //С помощью .val() берем значение с инпутов
      surname: inpSurname.val(),
      number: inpNum.val()
    }
    $.ajax({
      method: "post",//отправляем
      url: "http://localhost:8000/contact",//на указанный сервер
      data: obj,
      success: function(data) {//если отправка успешно 
          render()//вызываем функцию render()
      },
      error: function(err) {
        console.log(err);//иначе выводим ошибку
      }
    })
    $('input').val('');//очищаем все инпуты, чтобы при вводе след значений не делать это в ручную
  }else{alert('Заполните обязательные поля')}
});

function render (){
  $('.list').html('')//все что находится внутри <ul> очищаем 
  $.ajax({
    method:"get",//Получаем 
    url:"http://localhost:8000/contact",//из указанного сервера
    success: function(data) {//если успешно получили
      data.map((item, i) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
        $('.list').append(`
          <li class="liListC"  data-id="${item.id}">${i+1}. ${item.name}</li> 
        `)
      })
    },
    error: function(err){
      console.log(err);
    }
    });
};


//------------------------------------Просмотр в модальном окне--------------------
$('.list').on('click', 'li', (e)=>{
  $('.modalWin').toggleClass('dNone');
  $('.modal').text('');
  let target = $(e.target);
  let id = target.attr('data-id');
  $.ajax({
    method: 'get', 
    url: `http://localhost:8000/contact/${id}`,
    success: function(data){
      $('.modal').append(`
        <button class="btnX" data-id="${id}">x</button>
        <li class="liMod">Имя: <span>${data.name}</span></li>
        <li class="liMod">Фамилия: <span>${data.surname}</span></li>
        <li class="liMod">Номер: <span>${data.number}</span></li>
        <input class="dNone btnSave" type="submit" value="save">
        <div class="modalDiv"><button class="btnUpdate">Update</button><button class="btnDelete">Delete</button></div>
      `)
    }
  })
})
$('.modalWin').on('click',function(e){
  if(e.target !== e.currentTarget)return;
  $(this).toggleClass('dNone')
})
$('.modal').on('click','.btnX',function(){
  $('.modalWin').toggleClass('dNone');
});


//-----------------------------Редактирование-----------------------------
let arr=[];
$('.modal').on('click', '.btnUpdate', (e)=>{//----Update----
  e.preventDefault();

  let id = $('.btnX').attr('data-id');
  $('.modal').text('');
  $.ajax({
    method: 'get', 
    url: `http://localhost:8000/contact/${id}`,
    success: function(data){
      $('.modal').append(`
        <button class="btnX" data-id="${id}">x</button>
        <li class="liMod">Имя: <input class="modInpName" value="${data.name}"></li>
        <li class="liMod">Фамилия: <input class="modInpSurname" value="${data.surname}"></li>
        <li class="liMod">Номер: <input class="modInpNumber" value="${data.number}"></li>
        <input class="btnSave" type="submit" value="save">
      `)
    }
  });
});


$('.modal').on('click', '.btnSave', (e)=>{//-----Save----
  e.preventDefault();
  let id = $('.btnX').attr('data-id');
  console.log(id)
  $.ajax({
    method: 'patch',
    url: `http://localhost:8000/contact/${id}`,
    data:{
      name: $('.modInpName').val(),
      surname: $('.modInpSurname').val(),
      number: $('.modInpNumber').val()
    },
    success:function(){
      render()
    },
    done: function(data){
      console.log(data)
    }
  })
  $('.modalWin').toggleClass('dNone');
});


//----------------------------------------------Удаление------------------
$('.modal').on('click', '.btnDelete', (e)=>{
  e.preventDefault();
  let id = $('.btnX').attr('data-id');
  let q = confirm('Вы уверены?');

  if(q==true){
    $.ajax({
      method: 'delete',
      url: `http://localhost:8000/contact/${id}`,
      success: function(data){
      console.log('Вы удалили данные!');
      $('.modalWin').toggleClass('dNone');
      render();
     },
     error: function(error){
      console.log('Произошла ошибка!!!');
    }
  });
  }else{return};

})

