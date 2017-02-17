import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { SpotDetailComponent }  from './spot-detail.component';
import { SpotsComponent }      from './spots.component';
import { SpotService }          from './spot.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    SpotDetailComponent,
    SpotsComponent
  ],
  providers: [ SpotService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
