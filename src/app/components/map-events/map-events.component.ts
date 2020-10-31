import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { CesiumEvent, MapEventsManagerService } from 'angular-cesium';

@Component({
  selector: 'app-map-events',
  templateUrl: './map-events.component.html',
  styleUrls: ['./map-events.component.scss'],
})
export class MapEventsComponent implements OnInit {
  @Output() mouseMove = new EventEmitter();

  constructor(
    private eventManager: MapEventsManagerService,
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.eventManager.register({ event: CesiumEvent.LEFT_DOWN }).subscribe(() => {
      this.ngZone.run(() => {
        this.mouseMove.emit();
      });
    });

    this.eventManager.register({ event: CesiumEvent.LEFT_UP }).subscribe(() => {
      this.ngZone.run(() => {
        this.mouseMove.emit();
      });
    });
  }
}
