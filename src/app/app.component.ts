import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent, FormsModule],
})
export class AppComponent {
  title = 'angular-testing-project';
Task: any;

newTask: string;
constructor() {
  this.newTask = '';
}

  addTask(task: string) {
    if (!task.trim()){
      return;
    }

    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(task: string) {
    const tasks = this.getTasks();
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  getTasks(): string[] {
    return [];

  }
}
