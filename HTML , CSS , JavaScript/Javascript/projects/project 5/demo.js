/** @format */

var myLeads = [];

const inputEl = document.getElementById("input-El");
const ulEl = document.getElementById("ul-El");

const inputbtn = document.getElementById("input-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deletebtn = document.getElementById("delete-btn");
const tabs=[ {url:"http/linkedin/profile"}]
 


var savebtn=document.getElementById("tab-btn")



savebtn.addEventListener("click",function(){
  console.log(tabs[0].url)
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads)
})

deletebtn.addEventListener("dblclick", function () {
  console.log("double clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

function render(leads) {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a  target='blank' href='${myLeads[i]}'>
              ${myLeads[i]}  
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;

  console.log(listItems);
}
