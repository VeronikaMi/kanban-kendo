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
  constructor(public service: KanbanService) {}
}

export class User {
  public id: number = 0;
  public name: string = '';
  public position: string = '';
  public imgUrl: string = '';
}
