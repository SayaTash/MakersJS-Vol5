let user_list = $('.user-list');
let inp = $('.inp');
let mas = [];

let btn = $('button').on('click',()=>{
    if(!inp.val()){
        alert('Заполните поле'); 
        return;
    }
    mas.push(inp.val());
    inp.val('');
    render();
    // console.log(mas);
});

function render(){
    user_list.html("");
    mas.forEach((item,i)=>{
        user_list.append(`
            <li>
                ${item}
                <button class="btns" onclick="deleteItem(${i})">X</button>
                <button class="btns" onclick="lineZ(${i})">-</button>
                <button class="btns" onclick="update(${i})">update</button>
                <input class="chk" type="checkbox">
            </li>
        `);
    });
};

function deleteItem(i){
    let con = confirm('Вы уверены?');
    if(con===true){
        mas.splice(i,1);
        render();
    }else console.log(con);
}

function lineZ(i){
    let togg = `<span class="zBtn">${mas.slice(i,(i+1))}</span>`;
    mas.splice(i,1,togg);
    render();
}

function update(i, val){
    val = prompt('Введи новое значание');
    if(val!=null){
        mas.splice(i,1,val)
        render();
    }
}

$('.user-list').on('change', '.chk', function(e){
    let val = $(e.target).is(":checked");
    if(val==true){
        $('.user-list li').addClass('zBtn');
    }
})