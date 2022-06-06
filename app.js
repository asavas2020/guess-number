

let number = 30 //Math.floor(Math.random()*(100) + 1);
console.log(number);

// let startGame = document.getElementById("#guess-h2");
let input = document.querySelector("type");
let button = document.querySelector("button");
let result = document.getElementById("#guess-h3");
// let attemt = document.querySelector("p");

 

   
let guess = +prompt("Enter A number (1 - 100)");
   input.innerHTML = guess


button.addEventListener("click", check) 

function check() {

    while (true) {
   
        
    if(guess>number){
        result.innerText = console.log(`Sorry You must enter a number less than ${guess}, please try again`);
    }
      
    else if(guess<number){
        result.innerText = console.log(`Sorry You must enter a number greater than ${guess}, please try again`);
        
    } else{
        result.innerText = console.log("Congratulation You Win!!!");
    break
    }
  }
 } 
 check()



