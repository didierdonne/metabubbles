import { Component } from '@angular/core';

import { Circles } from './circles.service';
import { CircleComponent } from './circle.component'
import { Circle } from './circle.model';

@Component({
  selector: 'mb-canvas',
  template: `
            <svg [attr.viewBox]=this.svgViewbox
              preserveAspectRatio="xMidYMid meet"
              (click)="toggleRunning()">
              <svg:g mb-circle
                *ngFor="let circle of circles.sourceCircles"
                [circle]="circle" />
            </svg>
            `,
  styleUrls: ['./src/app/canvas.component.css']
})

export class CanvasComponent {

  svgViewbox: number[] = [0, 0, 900, 500];
  running: boolean = false;
  circs: Array<Circle> = [];

  constructor(private circles:Circles){ }


  ngOnInit(){
    this.running = true;
  }

  ngOnDestroy(){
    this.running = false;
  }

  toggleRunning(){
    this.running = !this.running;
    if (this.running){
      this.animationFrame();
    }
  }

  animationFrame(){
    this.circles.update();
    if (this.running){
      requestAnimationFrame(() => this.animationFrame());
    }
  }

}
