import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/app.component';
import { Task } from '../task-list/task-item/task-item.component';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() users: User[] = [];
  @Output() closePopup: EventEmitter<void> = new EventEmitter();
  @Output() newTaskCreated: Subject<Task> = new Subject();
  public textAreaValue: string = '';
  public newTask: Task = new Task();

  public assignees: User[] = [];

  public addNewTask() {
    if (this.newTask.name.length > 0 && this.newTask.desc.length > 0) {
      this.newTaskCreated.next(this.newTask);
      this.closePopup.emit();
    }
  }
}