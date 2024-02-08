import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../model';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, InputTextModule,
    RadioButtonModule, ButtonModule, FieldsetModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Output()
  todoList = new EventEmitter<Todo>();

  todoForm!: FormGroup

  priorities: string[] = ['Low', 'Medium', 'High'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>('Test', [Validators.min(5)]),
      priority: this.fb.control<string>('Low', [Validators.required]),
      dueDate: this.fb.control<Date>(new Date, [Validators.required]),
    })
  }

  addTask() {
    const formValue = this.todoForm.value;
    const todo: Todo = {
      description: formValue.description,
      priority: formValue.priority,
      dueDate: formValue.dueDate,
    }
    console.log(this.todoForm.value);
    this.todoList.emit(todo);
    this.todoForm.reset();
  }

}
