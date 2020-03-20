let name = $('#name');
let region = $('#region');
let subregion = $('#subregion');
let capital = $('#capital');
let flag = $('#flag');
let inp = $('#inp');


$('#btn').on('click', ()=>{
    let inpVal = inp.val();
    console.log(inpVal);
    fetch(`https://restcountries.eu/rest/v2/name/${inpVal}`)//он об url берет ответ с бекенда 
        .then(result => result.json())  //ждут ответа 
        .then(data => { //ждет datu 
            name.html(data[0].name)
            region.html(data[0].region)
            subregion.html(data[0].subregion)
            capital.html(data[0].capital)
            
            flag.css('background',`url(${data[0].flag}) no-repeat`)
            flag.css('background-size','contain')

        });
});





