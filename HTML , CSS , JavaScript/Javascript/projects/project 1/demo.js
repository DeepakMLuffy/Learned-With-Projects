/** @format */

// document.getElementById("one").innerText="9"
let countEl = document.getElementById("count-el");

let count = 0;
function button() {
  count +=1;
  countEl.innerText = count;
}



function decrement() {
  count -=1;
  countEl.innerText = count;
}


var saveEl= document.getElementById("save-el")


function save() {
 var countstr = count + " - "
  saveEl.textContent+= countstr
   
  countEl.textContent= 0
  count =0
}