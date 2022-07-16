import { Component, OnInit } from '@angular/core';
import { TaskObject } from './types-classes';
import { KanbanService } from './kanban.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public show = false;
  public tasks: TaskObject = this.service.typedTasks;

  constructor(public service: KanbanService) {}

  ngOnInit() {
    this.service.tasksChanged.subscribe((newTasks: TaskObject) => {
      this.tasks = { ...newTasks };
    });
  }
}
