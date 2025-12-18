export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, done: false });
  }

  completeTask(task) {
    const t = this.tasks.find(t => t.task === task);
    if (t) t.done = true;
  }

  listTasks() {
    console.log(this.tasks);
  }
}

