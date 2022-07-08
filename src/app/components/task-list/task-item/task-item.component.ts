import { Component, Input } from '@angular/core';
import { User } from 'src/app/app.component';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task = new Task();
  public deleteTask() {}
}

export class Task {
  public name: string = '';
  public desc: string = '';
  public assignees: User[] = [];
}
