const input = document.querySelector(".taskInput");
const btnAdd = document.querySelector(".addBtn");
const displayElement = document.querySelector(".taskList");

class ToDO {
  constructor(text, id) {
    this.text = text;
    this.id = Math.floor(Math.random() * 100000);
  }

  addToDo() {
    return `<div class="newEl" data-id="${this.id}"><li>${this.text}</li> <span class="remove">❌</span> </div>`;
  }
}

class ToDoManager {
  constructor() {
    this.todos = [];
  }
  addToDo(todo) {
    this.todos.push(todo);
  }

  deleteToDo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const todoMangers = new ToDoManager();

btnAdd.addEventListener("click", function () {
  let value = input.value.trim();
  if (value !== "") {
    let instanca1 = new ToDO(value);
    todoMangers.addToDo(instanca1);
    displayElement.innerHTML += instanca1.addToDo();
  }
  input.value = "";
});

displayElement.addEventListener("click", function (event) {});
