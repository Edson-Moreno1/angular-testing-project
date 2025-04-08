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
newTask: any;




  addTask(task: string) {
  }

  deleteTask(task: string) {
   
  }

  getTasks(): string[] {
    return [];

  }
}
