import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById('input');
const input = document.querySelector('input');
const compAllBtn = document.getElementById('compAllBtn');

addBtn.addEventListener('click', () => { 
    if (input.value === '') return; //입력값이 없으면 목록 추가 안 함(예외처리)

    const todoControl = new TodoController(input.value);
    todoControl.addTodo();
})

compAllBtn.addEventListener('click', () => {
    console.log('compAllBtn');
})

