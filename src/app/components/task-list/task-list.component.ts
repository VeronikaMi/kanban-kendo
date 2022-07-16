import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../types-classes';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public tasks: Task[] = [];
  public customClass: string = '';

  ngOnInit() {
    this.customClass = this.label.toLowerCase().replace(' ', '-');
  }
}
