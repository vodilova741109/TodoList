'use strict';

const todoControlForm  = document.querySelector('.todo-control'),
        headerInput = document.querySelector('.header-input'),
        todoList = document.querySelector('.todo-list'),
        todoCompleted = document.querySelector('.todo-completed'),
        headerBtn = document.getElementById('add');
  

const todoData = JSON.parse(localStorage.getItem('toDoList')) || [];     

const render = function() {
    todoList.textContent = '',
    todoCompleted.textContent = '';

    todoData.forEach(function(item, index){
        const toDoListElement = document.createElement('li');
        toDoListElement.classList.add('todo-item');
        toDoListElement.innerHTML = '<span class="text-todo">' + item.value + ' </span>' +
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' +
        '</div>';
        
        if (item.completed){
            todoCompleted.append(toDoListElement);
        } else {
            todoList.append(toDoListElement);
        }
        
        const btntodoComplete = toDoListElement.querySelector('.todo-complete'); 
        
        btntodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            upDateLocalStorage();
            render();
        })        
        
        const btntodoRemove = toDoListElement.querySelector('.todo-remove'); 
        
        btntodoRemove.addEventListener('click', function(){
            todoData.splice(index, 1);
            upDateLocalStorage();
            render();
        });                
    })

       
};

todoControlForm.addEventListener('submit', function(event){
    event.preventDefault();
    if (headerInput.value.trim() === '') return;

    todoData.push({
        value: headerInput.value,
        completed: false
    });
    
    upDateLocalStorage();

    headerInput.value = '';
    
    render();  
});


function upDateLocalStorage() {
    localStorage.toDoList = JSON.stringify(todoData)
}

render();