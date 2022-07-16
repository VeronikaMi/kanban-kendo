import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './app.component';
import { Task } from './components/task-list/task-item/task-item.component';

@Injectable()
export class KanbanService {
  public id: number = 1;
  public filterAssignneeId: number = -1;
  public assigneeChanged: Subject<number> = new Subject();
  public tasksChanged: Subject<{ [key: string]: Task[] }> = new Subject();

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
      id: this.id++,
      name: 'Name example',
      desc: 'doincoilnacolcn',
      assignees: [1],
    },
    {
      id: this.id++,
      name: 'Filter example2',
      desc: 'doincoilnacolcn',
      assignees: [2],
    },
  ];

  public inProgressTasks: Task[] = [
    {
      id: this.id++,
      name: 'Name example2',
      desc: 'doincoilnacolcn',
      assignees: [3],
    },
  ];

  public QATasks: Task[] = [
    {
      id: this.id++,
      name: 'Name example4',
      desc: 'doincoilnacolcn',
      assignees: [4],
    },
  ];

  public doneTasks: Task[] = [
    {
      id: this.id++,
      name: 'Name example5',
      desc: 'doincoilnacolcn',
      assignees: [3],
    },
  ];

  public typedTasks: { [key: string]: Task[] } = {
    TODO: this.todoTasks,
    'In Progress': this.inProgressTasks,
    QA: this.QATasks,
    Done: this.doneTasks,
  };

  public backUp: { [key: string]: Task[] } = { ...this.typedTasks };

  public addNewTask(newTask: Task): void {
    this.backUp['TODO'] = [...this.backUp['TODO'], newTask];
    // this.typedTasks['TODO'] = [...this.typedTasks['TODO'], newTask];
    // console.log(this.backUp);
    // this.tasksChanged.next(this.backUp);
    this.filterAssignees(this.filterAssignneeId);
  }

  public updateTask(updatedTask: Task, type: string) {
    const index = this.backUp[type].findIndex(
      (task) => task.id === updatedTask.id
    );
    this.backUp[type][index] = { ...updatedTask };
    // this.tasksChanged.next(this.backUp);
    this.filterAssignees(this.filterAssignneeId);
  }

  public deleteTask(id: number, type: string): void {
    this.backUp[type] = [
      ...this.backUp[type].filter((task: Task) => task.id !== id),
    ];
    // this.tasksChanged.next(this.backUp);
    this.filterAssignees(this.filterAssignneeId);
  }

  public filterAssignees(id: number): void {
    console.log(id);
    // this.filterAssignneeId = this.filterAssignneeId === id ? -1 : id;
    console.log(this.filterAssignneeId);
    if (this.filterAssignneeId !== -1) {
      Object.keys(this.typedTasks).forEach((key: string) => {
        this.typedTasks[key] = [
          ...this.backUp[key].filter((task: Task) =>
            task.assignees.includes(id)
          ),
        ];
      });
      console.log(this.typedTasks);
    } else {
      Object.keys(this.typedTasks).forEach((key: string) => {
        this.typedTasks[key] = [...this.backUp[key]];
      });
      // this.typedTasks = { ...this.backUp };
      console.log(this.typedTasks);
    }
    this.tasksChanged.next(this.typedTasks);
  }

  public moveTask(type: string, id: number, toLeft?: boolean): void {
    console.log('task', type, id, toLeft);
    Object.keys(this.backUp).forEach((key: string, index) => {
      if (type === key) {
        this.move(index, id, toLeft);
        return;
      }
    });
  }

  private move(index: number, id: number, toLeft?: boolean): void {
    console.log('move', index, id, toLeft);
    const currentType: string = Object.keys(this.backUp)[index];
    const destinationType: string = Object.keys(this.backUp)[
      toLeft ? index - 1 : index + 1
    ];

    const taskIndex: number = this.backUp[currentType].findIndex(
      (task) => task.id === id
    );

    this.backUp[destinationType].push(this.backUp[currentType][taskIndex]);

    this.backUp[currentType].splice(taskIndex, 1);
    // this.tasksChanged.next(this.backUp);
    this.filterAssignees(this.filterAssignneeId);
  }
}
