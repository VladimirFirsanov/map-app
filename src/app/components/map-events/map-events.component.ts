import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import {
  CesiumEvent,
  CoordinateConverter,
  MapEventsManagerService,
} from 'angular-cesium';


@Component({
  selector: 'app-map-events',
  templateUrl: './map-events.component.html',
  styleUrls: ['./map-events.component.scss'],
  providers: [CoordinateConverter],
})
export class MapEventsComponent implements OnInit {
  @Output() mouseMove = new EventEmitter();

  constructor(
    private eventManager: MapEventsManagerService,
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.eventManager.register({ event: CesiumEvent.LEFT_DOWN }).subscribe((result) => {
      this.ngZone.run(() => {
        this.mouseMove.emit();
      });
    });

    this.eventManager.register({ event: CesiumEvent.LEFT_UP }).subscribe((result) => {
      this.ngZone.run(() => {
        this.mouseMove.emit();
      });
    });
  }
}
