var block = document.querySelector('.z');
var subTitle = document.querySelector('.s')
block.addEventListener('click', function(){
        if(this.style.backgroundColor){
            this.style.backgroundColor = "";
            this.style.height = "20%";
            subTitle.style.display = "none"
        }
        else{
            this.style.height = "35%"
            this.style.backgroundColor = "#33d2fd";
            subTitle.style.display = "block"
        }

        console.log("click")
    })