


var num1= 1
var num2= 5


document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2


var num3=document.getElementById("num3")
var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var multiply = document .getElementById("multiply")
var divide = document.getElementById("divide")



add.addEventListener("click",function(){
 num3.textContent= "Answer :"+num1+num2
})
subtract.addEventListener("click",function(){
 num3.textContent= "Answer :"+num1-num2
})
divide.addEventListener("click",function(){
 num3.textContent="Answer :"+num1/num2
})
multiply.addEventListener("click",function(){
 num3.textContent="Answer :"+num1*num2
})