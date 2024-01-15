const input = document.querySelector(".taskInput");
const btnAdd = document.querySelector(".addBtn");
const displayElement = document.querySelector(".taskList");
const removeElement = document.querySelector(".remove");
console.log(removeElement);

class ToDO {
  constructor(text) {
    this.text = text;
  }
  addToDo() {
    return `<div class="newEl"><li>${this.text}</li> <span class="remove">❌</span> </div>`;
  }
}
class ToDoManager {
  constructor(todos) {
    this.todos = [];
  }
  addToDo(todo) {
    this.todos.push(todo);
  }
  deleteToDo(id) {
    // this.id.slice(id, 1);
  }
}
const todoMangers = new ToDoManager();
