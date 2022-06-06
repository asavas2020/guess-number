
let start = document.querySelector(".start");
let input = document.querySelector(".input1");
let button = document.querySelector(".btn");
let result = document.getElementById("guess-p");
let attemt = document.querySelector(".span");
let win = document.querySelector(".win")
let up = document.querySelector(".up")
let down = document.querySelector(".down")


let number = Math.floor(Math.random()*(100) + 1);
// console.log(number);

live = 0   

const check = function() {
  
  if(input.value>number){
        result.innerHTML = `Sorry You must enter a number less than ${input.value} 👇🔻🔻🔻👇 please try again...`;
        input.value = "" ;
        down.play() ;
          
    }
      
   else if(input.value<number){
        result.innerHTML = `Sorry You must enter a number greater than ${input.value} 👆🔺🔺🔺👆 please try again...`;
        input.value = ""
        up.play() ;

    } else{
        result.innerHTML = '🚀🚀🚀Congratulation You Win 🚀🚀🚀!!!'
        input.value = ""
        win.play() ;
        }

     live+=1;
    attemt.innerHTML = live;

 } 

button.addEventListener("click", check)

start.addEventListener("click",() => {
    location.reload()
})


input.addEventListener("keydown",(e=>{
    if(e.keyCode===13){
      check()
    }
  }))