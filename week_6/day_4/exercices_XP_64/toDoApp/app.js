import { TodoList } from "./toDoApp/todo.js";

const todo = new TodoList();

todo.addTask("Learn Node");

todo.completeTask("Learn Node");

todo.listTasks();
