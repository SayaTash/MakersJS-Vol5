


const boxes = document.querySelectorAll('.box');

let isX = true;

function getXor0(){
    return isX ? 'X' : '0'
}

boxes.forEach(item => {
    item.addEventListener('mouseover', function(e) {
        e.target.innerHTML = `
        <span class='mouse-hover'>
            ${getXor0()}
        </span>`;
    });
    item.addEventListener('mouseout', function(e){
        e.target.innerHTML = '';
    });

    item.addEventListener('click', function(e){
        e.target.classList.add(getXor0());
        e.target.innerHTML = getXor0();
        isX = !isX;
    });

});











