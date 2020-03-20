let list = $('.list');
let page = 0;
let btnLeft = $('.left')
let btnRigth = $('.rigth')
let url = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20` /*'https://pokeapi.co/api/v2/pokemon/'*/;
$('.contentModal').on('click','.clouse', function(){
    $('.modal').css('display','none');
})

btnRigth.on('click', ()=>{
    list.html('');
    
    page += 20;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    fetch(url)
    .then(result=>result.json())
    .then(data=>{
        render(data)
    });
})
btnLeft.on('click', ()=>{
    if(page>0){
    list.html('');
    page -= 20;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    fetch(url)
    .then(result=>result.json())
    .then(data=>{
        render(data)
    });}else{alert('1 страница')}
})



fetch(url)
    .then(result=>result.json())
    .then(data=>{
        render(data)
        console.log(data)
    });

function modal(i){
    $('.contentModal').html('');
    fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
        .then(result=>result.json())
        .then(data=>{
            let tip = [];
            data.types.forEach((item)=>{tip.push(item.type.name)})
            $('.modal').css('display','block');
                $('.contentModal').append(`
                    <span class="clouse">&times;</span>
                    <li>Имя: ${data.name}</li>
                    <li>Тип: ${tip}</li>
                    <li>Рост: ${data.height}</li>
                    <li>Вес: ${data.weight}</li>
                    <li>Фото:<img src=" ${data.sprites.front_default}"></li>
                `)
        })
}

function render(data){
    data.results.forEach((item,i) => {
        list.append(`
        <li class="liNames">
            <span onclick="modal(${i})">${item.name}</span>
        </li>
    `)
    });
}