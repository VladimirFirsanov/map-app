import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {

  @Input() public map;

  public active: boolean;

  constructor() {
    this.active = false;
  }

  public toggleAction(): void {
    this.active = !this.active;
  }
}
