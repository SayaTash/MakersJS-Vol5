
var floor = 1;
var max_floor = 16;
var min_floor = 1;
var result = document.querySelector('.blockResult');
var input1 = document.querySelector('.inp');
var btn1 = document.querySelector('.btn');

var blockLift = document.querySelector('.blockLift');

var Lift = document.querySelector('.lift');
    blockLift.style.height = "500px";

var floorHeight = parseInt(blockLift.style.height)/max_floor
    Lift.style.height = floorHeight+"px"


function recursion(z){
    result.innerHTML = `Вы на ${floor} - этаже`;
    Lift.innerHTML = `${floor}`;
    
    Lift.style.bottom = (floorHeight*floor-floorHeight)+"px";
    setTimeout(function(){
        if (z==floor){
            return
        }
        if (z<floor && floor > min_floor){
            floor--;
        }        
        else if (z>floor && floor < max_floor){
            floor++;
        }
        recursion(z)
    },1000)
    console.log(Lift.style.bottom)
}

btn1.addEventListener('click', function(){
    if(1<=input1.value&&input1.value<=16){
    recursion(+input1.value)}
    else {
        result.innerHTML = `Укажите правльный этаж`;
    }
})