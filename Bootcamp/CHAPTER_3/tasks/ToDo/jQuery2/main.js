let input = $('input');
let btnAdd = $('.btnAdd');
let list = $('.list');
let arr = [];

btnAdd.on('click', function(){
    if(input.val()==''){
        alert('Заролните поле!');
        return;
    }else{
        arr.push(input.val());
    }
    render();
    input.val('')
});

function render(){
    list.html('');
    arr.forEach((item, index)=>{
        list.append(`
            <li>
                <input class="check" type="checkbox" onclick="thr(${index})">
                <span data-text="${item}" data-index="${index}">${item}</span>
                <button class='btnDel' onclick='deleteI(${index})'>x</button>
            </li>
        `)
    })
}

function deleteI(i){
    let q = confirm('Вы уверены?');
    if(q===true){
        arr.splice(i,1);
        render();
    }
}



function thr(i){
    $('.list span').eq(i).toggleClass('zBtn');
}

function openEditor(e){
    let targ = $(e.target);
    let index = targ.attr('data-index');
    let text = targ.attr('data-text');
    targ.replaceWith(`<input class="editor-input" value="${text}" data-index="${index}">`);
}

function editLi(e){
    let targ = $(e.target);
    let index = targ.attr('data-index');
    let text = targ.val();
    arr[index] = text;
    render();
}

$('.list').on('dblclick', 'span', openEditor)
$('.list').on('change', '.editor-input', editLi)



















