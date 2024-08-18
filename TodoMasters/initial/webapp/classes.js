import { observerMixin } from "./mixins.js";

export class TodoItem {
    constructor(text) {
        this.text = text;
    }
    equals(other) { // Value Object pattern: Prevent duplicate objects from being created.
        return this.text === other.text;
    }
}

export class TodoList {
    #data = new Set();
    get items() {
        return this.#data;
    }

    // Singleton
    static instance=null;
    static {
        this.instance = new TodoList();
    }
    static getInstance() {
        return this.instance;
    }

    constructor() {
        /**
         * Throws a error in the following case:
         * const newTodoList = new TodoList()
         */
        if(TodoList.instance) {
            throw new Error('Use TodoList.getIstance() instead.');
        }
    }

    // List functions
    add(todoItem) {
        const array = Array.from(this.#data);
        const exists = array.filter(toDo => toDo.equals(todoItem)).length > 0;
        if(!exists) {
            this.#data.add(todoItem);
            this.notify();
        }
    };
    
    delete(todo) {
        const array = Array.from(this.#data);
        const deleteTodo = array.filter(toDo => toDo.text === todo);
        this.#data.delete(deleteTodo);
        this.notify();
    }

    find(text) {
        const array = Array.from(this.#data);
        return array.find(item => item.text === text);
    }

    replaceList(list) {
        this.#data = list;
        this.notify();
    }
}

Object.assign(TodoList.prototype, observerMixin);