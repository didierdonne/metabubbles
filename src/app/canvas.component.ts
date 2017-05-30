import { Component } from '@angular/core';

import { Circles } from './circles.service';
import { CircleComponent } from './circle.component'
@Component({
  selector: 'mb-canvas',
  template: `
            <svg viewBox="0 0 900 500"
              preserveAspectRatio="xMidYMid meet">
              <svg:g mb-circle
                *ngFor="let circle of circleService.circles"
                [circle]="circle" />
            </svg>
            `,
  styleUrls: ['./src/app/canvas.component.css']
})

export class CanvasComponent {

  constructor(private circleService:Circles){ }


}
