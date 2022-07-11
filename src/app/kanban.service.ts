import { Injectable } from '@angular/core';
import { User } from './app.component';
import { Task } from './components/task-list/task-item/task-item.component';

@Injectable()
export class KanbanService {
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
