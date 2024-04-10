import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById('input');
const input = document.querySelector('input');

addBtn.addEventListener('click', () => { //람다식과 비슷한 듯?
    const todoControl = new TodoController(input.value);
    todoControl.addTodo();
})