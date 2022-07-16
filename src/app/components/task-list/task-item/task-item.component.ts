import { Component, Input } from '@angular/core';
import { User } from 'src/app/app.component';
import { KanbanService } from 'src/app/kanban.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task = new Task();
  @Input() taskType: string = '';
  public editAssignees: boolean = false;
  public assignees: User[] = [];

  constructor(public service: KanbanService) {}

  public ngOnInit(): void {
    this.assignees = this.service.users.filter((assignee) =>
      this.task.assignees.includes(assignee.id)
    );
  }

  public assigneeChanged(newAssignees: User[]) {
    this.task = {
      ...this.task,
      assignees: newAssignees.map((assignee: User) => assignee.id),
    };
  }

  public updateTask(): void {
    if (!this.editAssignees) {
      this.service.updateTask(this.task, this.taskType);
    }
  }

  public deleteTask() {
    this.service.deleteTask(this.task.id, this.taskType);
  }

  public move(toLeft?: boolean): void {
    this.service.moveTask(this.taskType, this.task.id, toLeft);
  }
}

export class Task {
  public id: number = 0;
  public name: string = '';
  public desc: string = '';
  // public assignees: User[] = [];
  public assignees: number[] = [];
}
