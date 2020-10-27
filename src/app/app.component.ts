import { AfterViewInit, Component } from '@angular/core';
import { MapsManagerService, SceneMode, ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ViewerConfiguration],
})
export class AppComponent implements AfterViewInit {
  title = 'map-app';

  maps = [
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

    viewerConf.viewerOptions = [];
  }

  ngAfterViewInit(): void {
    this.mapsManagerService.sync2DMapsCameras([
      {id: 'map-first'},
      {id: 'map-second'},
      {id: 'map-third'},
      {id: 'map-forth'},
    ]);
  }
}
