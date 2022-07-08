import { Component } from '@angular/core';
import { Task } from './components/task-list/task-item/task-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public show = false;
  public users: User[] = [
    {
      id: 1,
      name: 'Michael Holz',
      position: 'Manager',
      imgUrl: 'assets/male.png',
    },
    {
      id: 2,
      name: 'André Stewart',
      position: 'Product Manager',
      imgUrl: 'assets/male.png',
    },
    {
      id: 3,
      name: 'Jassy Smith',
      position: 'UX Designer',
      imgUrl: 'assets/female.png',
    },
    {
      id: 4,
      name: 'George Porter',
      position: 'Software Engineer',
      imgUrl: 'assets/male.png',
    },
    {
      id: 5,
      name: 'Leanne Graham',
      position: 'Software Engineer',
      imgUrl: 'assets/female.png',
    },
  ];

  public todoTasks: Task[] = [
    {
      name: 'Name example',
      desc: 'doincoilnacolcn',
      assignees: [this.users[0]],
    },
  ];

  public inProgressTasks: Task[] = [
    {
      name: 'Name example',
      desc: 'doincoilnacolcn',
      assignees: [this.users[0]],
    },
  ];

  public QATasks: Task[] = [
    {
      name: 'Name example',
      desc: 'doincoilnacolcn',
      assignees: [this.users[0]],
    },
  ];

  public doneTasks: Task[] = [
    {
      name: 'Name example',
      desc: 'doincoilnacolcn',
      assignees: [this.users[0]],
    },
  ];
}

export class User {
  public id: number = 0;
  public name: string = '';
  public position: string = '';
  public imgUrl: string = '';
}
