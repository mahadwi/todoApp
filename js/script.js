const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTodo();
    });
});

function addTodo() {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;

    const genertedID = generateId();
    const todoObject = generateTodoObject(genertedID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId(){
    return +new Date(); //mendapatkan timestamp pada javascript
}

function generateTodoObject(id, task, timestamp, isCompleted){
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}

document.addEventListener(RENDER_EVENT, function(){
    console.log(todos);
});

function makeTodo(todoObject){
    const textTitle = document.createElement('h2');
    textTitle.innerHTML = todoObject.task;
}