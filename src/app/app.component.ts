import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public users: User[] = [
    {
      name: 'Michael Holz',
      position: 'Manager',
      imgUrl: 'assets/male.png',
    },
    {
      name: 'André Stewart',
      position: 'Product Manager',
      imgUrl: 'assets/male.png',
    },
    {
      name: 'Jassy Smith',
      position: 'UX Designer',
      imgUrl: 'assets/female.png',
    },
    {
      name: 'George Porter',
      position: 'Software Engineer',
      imgUrl: 'assets/male.png',
    },
    {
      name: 'Leanne Graham',
      position: 'Software Engineer',
      imgUrl: 'assets/female.png',
    },
  ];
  public onAddNewClick() {}

  public deleteTask() {}
}

export class User {
  public name: string = '';
  public position: string = '';
  public imgUrl: string = '';
}
