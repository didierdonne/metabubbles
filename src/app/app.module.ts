import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CanvasComponent } from './canvas.component';
import { CircleComponent } from './circle.component';
import { Circles } from './circles.service';
import { Circle }	from './circle.model';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CanvasComponent, CircleComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Circles ]
})

export class AppModule {

}
