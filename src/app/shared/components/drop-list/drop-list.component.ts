import { Component } from '@angular/core';

@Component({
  selector: 'share-dropList',
  templateUrl: './drop-list.component.html',
  styles: [],
})
export class DropListComponent {
  public isOpen: boolean = false;

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}
