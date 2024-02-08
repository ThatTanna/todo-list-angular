import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';

  taskList: Todo[] = [];

  addTask(newTask: Todo) {
    this.taskList.push(newTask);
    console.log('parent: ' + newTask.dueDate);
  }

}
