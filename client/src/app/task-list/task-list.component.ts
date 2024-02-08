import { Component, Input } from '@angular/core';
import { Todo } from '../model';
import { DatePipe } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, CheckboxModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() taskList: Todo[] = [];

}
