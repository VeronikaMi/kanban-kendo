import { Component } from '@angular/core';
import { Task } from './components/task-list/task-item/task-item.component';
import { KanbanService } from './kanban.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public show = false;
  public tasks: { [key: string]: Task[] } = this.service.typedTasks;
  constructor(public service: KanbanService) {}

  ngOnInit() {
    this.service.tasksChanged.subscribe(
      (newTasks: { [key: string]: Task[] }) => {
        console.log('sub');
        this.tasks = { ...newTasks };
        console.log(this.tasks);
        // this.service.filterAssignees(this.service.filterAssignneeId);
      }
    );
  }
}

export class User {
  public id: number = 0;
  public name: string = '';
  public position: string = '';
  public imgUrl: string = '';
}
