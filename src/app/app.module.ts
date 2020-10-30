import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { ScreenComponent } from './components/screen/screen.component';
import { FormsModule } from '@angular/forms';
import { MapEventsComponent } from './components/map-events/map-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    MapEventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
