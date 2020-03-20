let btnNext = $('.next');
let btnPrev = $('.prev');
let list = $('.list');
let page = 0;
let modal = $('.modal');
let modContent = $('.modalContent');
let l= 'https://pokeapi.co/api/v2/pokemon/'
render(l)

function render(link){
    list.html('');
    $.ajax({
        type: 'get',
        url: link,
        success: function(data){
            data.results.forEach((item) => {
                list.append(`
                    <li class="li" data-link="${item.url}">
                        ${item.name}
                    </li>
                `)
            });
            console.log(data)
        },
        error: function(error){
            console.log(error);
        }
    })
}

list.on('click', '.li', function(e){
    modContent.html('');
    let targ = $(e.target);
    let link = targ.attr('data-link');
    $.ajax({
        type: 'get',
        url: link,
        success: function(data){
            modal.css('display' , 'block');
            let arrTypes = [];
            data.types.forEach(item=>{arrTypes.push(item.type.name)});
            modContent.append(`
                <span class="clouse">x</span>
                <li>Имя: ${data.name}</li>
                <li>Тип: ${arrTypes}</li>
                <li>Рост: ${data.height}</li>
                <li>Вес: ${data.weight}</li>
                <li><span>Фото: <img src="${data.sprites.front_default}"></span></li>
            `)
        },
        error: function(error){
            console.log(error);
        }
    })
});

btnNext.on('click', function(){
    page += 20;
    l = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    render(l)
})
btnPrev.on('click', function(){
    if(page>0){
    page -= 20;
    l = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    render(l)
    }else{alert('It`s page 1')}
})

modContent.on('click', '.clouse', function(){modal.css('display' , 'none');})


