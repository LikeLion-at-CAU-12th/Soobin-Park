import Todo from "../DOM/Todo.js";

class TodoController {
    //constructor
    constructor(todo){
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })
    }

    //method 
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value=''
    }

    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }

    doneTodo(){
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');

        // if(this.comBtnNode.innerText === '미완'){
        //     this.comBtnNode.innerText='완료';
        //     // this.innerText.node.classList.remove('done-text');
        //     // this.completeBtn.node.classList.remove('done-btn');
        // } else {
        //     this.comBtnNode.innerText = '미완';
        //     // this.innerText.node.classList.toggle('done-text');
        //     // this.completeBtn.node.classList.toggle('done-btn');
        // }
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow()); //상태 바꾸는 거 대신에 아예 사라지게

        //complete list로 이동
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newTodo.getRow());
    }

}

export default TodoController;