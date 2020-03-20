let btn = document.querySelector('.btn');
let inp = document.querySelector('.task-input');
let arr = [];
let list = document.querySelector('.user-list')



btn.addEventListener('click', function(){
    if (inp.value == '') {
        alert('Заполните поле!')

    } else {
    arr.push(inp.value)
    console.log(arr);
    render();
    }
    inp.vaule = "";
})

function render(){
    list.innerHTML = ""
    arr.forEach((item, index) => {
        list.innerHTML+= (`
        <li>
            <span class="spn" data-text="${item}" data-index="${index}">${item}</span> 
            <button onclick="deleteItem(${index})">X</button>
        </li>`);
        });
}; 
    
function deleteItem (index){
    arr.splice(index, 1)
    render();
}; 

function openEditor(e){
    let targ = $(e.target);
    let index = targ.attr('data-index');
    let text = targ.attr('data-text');
    targ.replaceWith(`<input class="editor-input" value="${text}" data-index="${index}">`);
    // arr[index] = prompt('hello');
    // render();
    console.log(text)
    console.log(index)
};

function editLi(e){
    let targ = $(e.target);
    let index = targ.attr('data-index');
    let text = targ.val();
    arr[index] = text;
    render();
}

$('.user-list').on('click', '.spn', openEditor)
$('.user-list').on('change', '.editor-input', editLi)