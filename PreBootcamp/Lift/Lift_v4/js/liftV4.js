var result = document.querySelector('.blockResult');
var input = document.querySelector('.inp');
var goBtn = document.querySelector('.goBtn');
var upBtn = document.querySelector('.upBtn')
var downBtn = document.querySelector('.downBtn')
var house = document.querySelector('.blockLift');
var lift = document.querySelector('.lift');
var floorHeight = 496 / 16;
    lift.style.height = floorHeight + "px"
var obj = {
    floor: 1,
    max_floor:16,
    min_floor:1,
    down:function(){
        if (this.floor > this.min_floor){
            this.floor--;
            this.print()
            lift.innerHTML = `${obj.floor}` 
            lift.style.bottom = (floorHeight * obj.floor - floorHeight)+"px";
        }
    },
    up:function(){
        if (this.floor < this.max_floor){
            this.floor++;
            this.print()
            lift.innerHTML = `${obj.floor}` 
            lift.style.bottom = (floorHeight * obj.floor - floorHeight)+"px";
        }
    },
    print:function(){
        result.innerHTML = `Вы на ${this.floor} этаже`
    },
    toFloor:function(n){ 
        this.print()
        lift.innerHTML = `${obj.floor}`
        lift.style.bottom = (floorHeight * obj.floor - floorHeight)+"px";       
        if(n == this.floor){
            return
        }
        else{
            setTimeout(()=>{
                if (n<this.floor){
                    this.down()
                } else if (n>this.floor){
                    this.up()
                }
                obj.toFloor(n)
            }, 500)
        }        
    }
}
goBtn.addEventListener('click', function() {
    n = input.value
    if (1<=n && n<=16){
        obj.toFloor(n)   
    }
    else{
        result.innerHTML = `Укажите правильный этаж`
    }
 });

 upBtn.addEventListener('click', function() {
    obj.up();
 });

 downBtn.addEventListener('click', function() {
    obj.down();
 });