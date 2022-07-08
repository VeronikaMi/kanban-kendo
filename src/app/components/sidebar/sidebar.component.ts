import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/app.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() users: User[] = [];
  @Output() openPopup: EventEmitter<void> = new EventEmitter();

  //   public onAddNewClick() {
  //     this.show = !this.show;
  //   }
}
