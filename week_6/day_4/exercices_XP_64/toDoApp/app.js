import { TodoList } from "./toDo.js";

const todo = new TodoList();

todo.addTask("Learn Node");
todo.addTask("Practice JS");
todo.completeTask("Learn Node");
todo.listTasks();
