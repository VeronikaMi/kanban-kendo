import { Component, Input } from '@angular/core';
import { KanbanService } from 'src/app/kanban.service';
import { Task } from './task-item/task-item.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() label: string = '';
  @Input() tasks: Task[] = [];
  public visibleTask: Task[] = [];
  public customClass: string = '';

  constructor(private service: KanbanService) {}

  ngOnInit() {
    this.customClass = this.label.toLowerCase().split(' ').join('-');
    // this.visibleTask = [...this.tasks];
    // this.service.assigneeChanged.subscribe((id: number) => {
    //   if (id !== -1) {
    //     this.tasks = this.service.typedTasks[this.label].filter((task: Task) =>
    //       task.assignees.includes(id)
    //     );
    //   } else {
    //     this.tasks = this.service.typedTasks[this.label];
    //   }
    // });

    // this.service.tasksChanged.subscribe((_) => {
    //   console.log('canged');
    //   this.visibleTask = [...this.tasks];
    // });
  }
}
