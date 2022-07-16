import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { User, Task } from '../../types-classes';
import { KanbanService } from 'src/app/kanban.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() public users: User[] = [];
  @Output() public closePopup: EventEmitter<void> = new EventEmitter();
  public textAreaValue: string = '';
  public newTask: Task = new Task();
  public assignees: User[] = [];

  constructor(private service: KanbanService) {}

  public addNewTask() {
    if (this.newTask.name.length > 0 && this.newTask.desc.length > 0) {
      this.service.addNewTask({
        ...this.newTask,
        assignees: this.assignees.map((assignee: User) => assignee.id),
        id: this.service.id++,
      });
      this.closePopup.emit();
    }
  }
}
