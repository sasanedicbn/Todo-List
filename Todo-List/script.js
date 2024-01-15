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
