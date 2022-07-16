import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskObject, User, Task } from './types-classes';

@Injectable()
export class KanbanService {
  public id: number = 1;
  public filterAssignneeId: number = -1;
  public assigneeChanged: Subject<number> = new Subject();
  public tasksChanged: Subject<TaskObject> = new Subject();

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

  public typedTasks: TaskObject = {
    TODO: this.todoTasks,
    'In Progress': this.inProgressTasks,
    QA: this.QATasks,
    Done: this.doneTasks,
  };

  public mainTasksObject: TaskObject = { ...this.typedTasks };

  public addNewTask(newTask: Task): void {
    this.mainTasksObject['TODO'] = [...this.mainTasksObject['TODO'], newTask];
    this.filterAssignees(this.filterAssignneeId);
  }

  public updateTask(updatedTask: Task, type: string) {
    const index = this.mainTasksObject[type].findIndex(
      (task) => task.id === updatedTask.id
    );
    this.mainTasksObject[type][index] = { ...updatedTask };
    this.filterAssignees(this.filterAssignneeId);
  }

  public deleteTask(id: number, type: string): void {
    this.mainTasksObject[type] = [
      ...this.mainTasksObject[type].filter((task: Task) => task.id !== id),
    ];
    this.filterAssignees(this.filterAssignneeId);
  }

  public filterAssignees(id: number): void {
    if (this.filterAssignneeId !== -1) {
      Object.keys(this.typedTasks).forEach((key: string) => {
        this.typedTasks[key] = [
          ...this.mainTasksObject[key].filter((task: Task) =>
            task.assignees.includes(id)
          ),
        ];
      });
    } else {
      Object.keys(this.typedTasks).forEach((key: string) => {
        this.typedTasks[key] = [...this.mainTasksObject[key]];
      });
    }
    this.tasksChanged.next(this.typedTasks);
  }

  public moveTask(type: string, id: number, toLeft?: boolean): void {
    Object.keys(this.mainTasksObject).forEach((key: string, index) => {
      if (type === key) {
        this.move(index, id, toLeft);
        return;
      }
    });
  }

  private move(index: number, id: number, toLeft?: boolean): void {
    const currentType: string = Object.keys(this.mainTasksObject)[index];
    const destinationType: string = Object.keys(this.mainTasksObject)[
      toLeft ? index - 1 : index + 1
    ];

    const taskIndex: number = this.mainTasksObject[currentType].findIndex(
      (task) => task.id === id
    );

    this.mainTasksObject[destinationType].push(
      this.mainTasksObject[currentType][taskIndex]
    );

    this.mainTasksObject[currentType].splice(taskIndex, 1);
    this.filterAssignees(this.filterAssignneeId);
  }
}
