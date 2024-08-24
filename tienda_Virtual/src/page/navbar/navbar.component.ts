import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() show: EventEmitter<void> = new EventEmitter<void>();

  showCart() {
    this.show.emit();
  }
}