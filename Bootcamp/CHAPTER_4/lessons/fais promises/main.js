// setTimeout(() => {
//     console.log('5 second')
// }, 5000);
// console.log('work')

// const myPromise = new Promise((resolve, reject)=>{
//     reject('This is a good result');

// });

// myPromise 
//     .then(result=>{         //фунуция then выполняется тогда когда выполнися resolve
//         console.log(result)
//     })
//     .catch(error =>{   //фунуция catch выполняется тогда когда выполнися reject
//         console.log(error)
//     });

//Цепочка promise

// const waitForFiveSecond = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Five second have passed');
//         },5000)
//     })
// }

// const waitForThreeSecond = function(massege){
//     console.log(massege)
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Three second have passed');
//         },3000)
//     })
// }

// waitForFiveSecond()
//     .then(waitForThreeSecond)
//     .then(result => console.log(result))
    


//Работа с api

// const countryURL = 'https://restcountries.eu/rest/v2/name/Kazakhstan'
// const getAlpha = 'https://restcountries.eu/rest/v2/alpha/'

// // fetch(countryURL)
// //     .then(response=>response.json())
// //     .then(data=>console.log(data));

// const borderCountries = async()=>{
//     const response = await fetch(countryURL)
//     const data = await response.json();

//     data[0].borders.forEach(async item => {
//         const resBorders = await fetch(getAlpha + item)
//         const countryData = await resBorders.json();

//         console.log(countryData)
//     });
// }
// borderCountries()


// try catch - страховка кода

// try{  //если в try ошибка сработает catch
//     let some = getUndefined();
// } catch(error){
//     console.log(error)
// }
// console.log('Work')


/*
npm innit
npm install --save json-server 
json-server --watch ./DB/db.json
json-server --watch ./DB/db.json --port 8000

e.preventDefault();
$.ajax({
    type
})

*/  //---------------------------------------------------




// fetch('http://localhost:3000/main')
//     .then(response=>response.json())
//     .then(data=>console.log(data));



//-------------------------------------












let inp = $('.inp');
let btn = $('.btnAdd');

$(window).ready(function(){
  render();
})

btn.on('click', function(){
    let obj = {
        task: inp.val()
    }

    $.ajax({
        type:"post", //
        url:'http://localhost:8000/tasks', //ссылка
        data: obj, //что мы отправляем
        success: function( data ){ //ловит ответ от бекенд
          render()
        },
        error: function(err){ //ловит ошибку
          console.log(err);
        }
      })

    inp.val('')

});


function render(){
  $('.list').html('')
    $.ajax({
        type:"get", //
        url:'http://localhost:8000/tasks', //ссылка
        success: function( data ){ //ловит ответ от бекенд
          data.map(item=>{
            $('.list').append(`
            <li>
                <span>Задаца №${item.id}</span> - ${item.task}
            </li>
        `)
          })
        },
        error: function(err){ //ловит ошибку
          console.log(err);
        }
      })


}

