import { Injectable } from '@angular/core';

import { Circle } from './circle.model';

@Injectable()

export class Circles {

  circles: Array<Circle> = [];
  sourceCircles: Array<Circle> = [];
  canvasWidth: number;
  canvasHeight: number;

  constructor(){
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;

    for (let i=0; i<100; i++){
      this.circles.push({
        x: this.randInt(900),
        y: this.randInt(500),
        radius: this.randInt(100) + 10,
        xMove: this.randInt(5) - 2,
        yMove: this.randInt(5) -2
      })
    }
  }

  update(){
    for(const circle of this.circles){
      if (circle.x < 0 - circle.radius){
        circle.x = this.canvasWidth + circle.radius;
      }
      if (circle.x > this.canvasWidth + circle.radius){
        circle.x = 0 - circle.radius;
      }
      if (circle.y < 0 - circle.radius){
        circle.y = this.canvasHeight + circle.radius;
      }
      if (circle.y > this.canvasHeight + circle.radius){
        circle.y = 0 - circle.radius;
      }
      circle.x += circle.xMove;
      circle.y += circle.yMove;
    }
  }

  randInt(max: number){
    return Math.floor(Math.random() * max);
  }
}
