let hands=["rock","paper","scissor"]


function random(){
 let randomIndex= Math.floor(Math.random()*3)
 return hands[randomIndex] 
}

console.log(random())