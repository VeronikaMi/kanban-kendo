import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../types-classes';
import { KanbanService } from 'src/app/kanban.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() public users: User[] = [];
  @Output() public openPopup: EventEmitter<void> = new EventEmitter();
  @Output() public filterByAssignee: EventEmitter<number> = new EventEmitter();

  constructor(public service: KanbanService) {}

  public onFilterClick(id: number): void {
    this.service.filterAssignneeId =
      this.service.filterAssignneeId === id ? -1 : id;
    this.filterByAssignee.emit(id);
  }
}
