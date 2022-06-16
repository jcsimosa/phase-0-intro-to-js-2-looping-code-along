// Code your solutions in this file

let Cards = ([`Charlie`, `Samip`, `Ali`], "birthday");
let ABC = []
function writeCards(array,event){
    
    for(let a = 0; a < array.length;a++){
      ABC.push(`Thank you, ${array[a]}, for the wonderful ${event} gift!`)
    }; 
    //console.log(ABC)
    return ABC
}
//writeCards(["Charlie", "Samip", "Ali"], "birthday");
//writeCards(array);

function countDown(){
    let Number = 10
    while (Number > -1){
      console.log(Number--)
    }
  }
  countDown()
  
