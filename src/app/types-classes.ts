export type TaskObject = { [key: string]: Task[] };

export class User {
  public id: number = 0;
  public name: string = '';
  public position: string = '';
  public imgUrl: string = '';
}

export class Task {
  public id: number = 0;
  public name: string = '';
  public desc: string = '';
  public assignees: number[] = [];
}
