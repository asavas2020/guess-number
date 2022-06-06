

let number = 30 //Math.floor(Math.random()*(100) + 1);
// console.log(number);

// let startGame = document.getElementById("#guess-h2");
let input = document.querySelector(".input1");
let button = document.querySelector(".btn");
let result = document.getElementById("guess-p");
// let attemt = document.querySelector("p");

 



const check = function() {

    while (true) {
   
    live = 0    
    if(input.value>number){
        result.innerHTML = `Sorry You must enter a number less than ${input.value}, please try again`;
    }
      
    else if(input.value<number){
        result.innerHTML = `Sorry You must enter a number greater than ${input.value}, please try again`;
        
    } else{
        result.innerHTML = 'Congratulation You Win!!!';
    
    }break
  }
 } 

button.addEventListener("click", check)

button.addEventListener("keydown", (e) => {
   if(e.code == "13") {
       check()
   }
})
