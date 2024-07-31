/** @format */

var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});


// select cancel button

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
 event.preventDefault()
 popupoverlay.style.display="none"
 popupbox.style.display="none"
})


//select container,add-book book-title-input,book-author-input,book-discription-input


var container = document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-Author-input")
var bookdiscriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
  event.preventDefault()

  var divv=document.createElement("div")
  divv.setAttribute("class","book-container")

  divv.innerHTML = `<h2>${booktitleinput.value}</h2>
  <h5>${bookauthorinput.value}</h5>
  <p>${bookdiscriptioninput.value}</p>
  <button onclick= "deletebook(event)" >Delete</button>
  `;


  container.append(divv) 
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";



})
function deletebook(event){
  event.target.parentElement.remove()
}