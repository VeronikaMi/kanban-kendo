import { Component, Input } from '@angular/core';
import { Task } from './task-item/task-item.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() label: string = '';
  @Input() tasks: Task[] = [];
}
