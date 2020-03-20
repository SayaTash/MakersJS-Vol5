

// $(".made_block").on('click',function(e){
    
//     let z = $(this);

//     $(".made_block").height("80px")
//     z.height("140px")

//     // 
//     // if(this.style.backgroundColor){
//     //     this.style.backgroundColor = "";
//     //     this.style.height = "80px";
//     // }
//     // else{
//     //     this.style.height = "140px"
//     //     this.style.backgroundColor = "#33d2fd"; 
//     //     subTitle.style.display = "block"
//     // }
//     console.log("click")
// })

var block = document.querySelector('.z');
var subTitle = document.querySelector('.s')
block.addEventListener('click', function(){
        if(this.style.backgroundColor){
            this.style.backgroundColor = "";
            this.style.height = "80px";
            subTitle.style.display = "none"
        }
        else{
            this.style.height = "140px"
            this.style.backgroundColor = "#33d2fd";
            subTitle.style.display = "block"
        }

        console.log("click")
    })