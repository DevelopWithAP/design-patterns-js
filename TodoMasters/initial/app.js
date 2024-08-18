globalThis.DOM = {};

const DOM = globalThis.DOM;

document.addEventListener('DOMContentLoaded', () => {
    // references to target elements
    DOM.todoList = document.getElementById('todo-list');
    DOM.addBthn = document.getElementById('add-btn');
    DOM.todoInput = document.getElementById('todo-input');

    // event listeners
    DOM.addBthn.addEventListener('click', () => {
        // to do
    });

    DOM.todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            // to do
        }
    });
});