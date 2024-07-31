/** @format */

let todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject,index)=>{
   
    let { name, date } = todoObject;

    let html = `
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="todoList.splice(${index},1) 
     renderTodoList();
      "class="delete-btn">Delete</button>
    `;
    todoListHTML += html;
  })

  // for (let i = 0; i < todoList.length; i++) {
  //   let todoObject = todoList[i];
  //   let { name, date } = todoObject;

  //   let html = `
  //   <div>${name}</div>
  //   <div>${date}</div>
  //   <button onclick="todoList.splice(${i},1) 
  //    renderTodoList();
  //     "class="delete-btn">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  let inputElement = document.querySelector(".js-name-input");
  let dateInputElement = document.querySelector(".js-date");
  let name = inputElement.value;
  let date = dateInputElement.value;

  todoList.push({
    name,
    date,
  });
  inputElement.value = "";
  renderTodoList();
}

setTimeout(function (){console.log("I Love only  Jessy")}, 10000)
setInterval(function (){console.log("Me to Deepak")}, 30000)
