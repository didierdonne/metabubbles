import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CanvasComponent } from './canvas.component';
import { CircleComponent } from './circle.component';
import { Circles } from './circles.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CanvasComponent, CircleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Circles]
})

export class AppModule { }
