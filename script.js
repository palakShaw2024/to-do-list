const todoInput= document.querySelector('#todo-input');
const addTodoBtn= document.querySelector('#addbtn');
const todoList= document.querySelector('#madelist');

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if ( todoText !== '') {
        const li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

li.textstyle = "text-decoration: line-through";
li,textstyle= "color: white";