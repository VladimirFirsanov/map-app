import { AfterViewInit, Component } from '@angular/core';
import { CesiumService, MapEventsManagerService, MapsManagerService, SceneMode, ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [ViewerConfiguration, MapEventsManagerService, CesiumService],
})
export class AppComponent implements AfterViewInit {

  public maps = [
    {
      id: 'map-first',
      sceneMode: SceneMode.PERFORMANCE_SCENE2D,
      containerId : 'first-map-container'
    },
    {
      id: 'map-second',
      sceneMode: SceneMode.PERFORMANCE_SCENE2D,
      containerId : 'second-map-container'
    },
    {
      id: 'map-third',
      sceneMode: SceneMode.PERFORMANCE_SCENE2D,
      containerId : 'third-map-container'
    },
    {
      id: 'map-forth',
      sceneMode: SceneMode.PERFORMANCE_SCENE2D,
      containerId : 'forth-map-container'
    }
  ];

  constructor(
    private viewerConf: ViewerConfiguration,
    private mapsManagerService: MapsManagerService,
  ) {

    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
    };
  }

  ngAfterViewInit(): void {
    this.mapsManagerService.sync2DMapsCameras([
      {id: 'map-first', bindZoom: true},
      {id: 'map-second', bindZoom: true},
      {id: 'map-third', bindZoom: true},
      {id: 'map-forth', bindZoom: true},
    ]);
  }
}
