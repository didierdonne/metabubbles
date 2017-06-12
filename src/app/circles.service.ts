import { Injectable } from '@angular/core';

import { Circle } from './circle.model';

@Injectable()

export class Circles {

  circles: Array<Circle> = [];
  sourceCircles: Array<Circle> = [];
  canvasWidth: number;
  canvasHeight: number;
  pairs: Array<any> = [];

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

    for (let i = 0; i < this.circles.length - 1; i++){
      for (let j = 0; j < this.circles.length - 1; j++){
        this.pairs.push([this.circles[i], this.circles[j + 1]])
      }
    }
  }

  update(){
    for(const circle of this.circles){
      this.moveCircle(circle);
    }

    for (const [left, right] of this.pairs){
      const dist = this.distance(left, right);
      const overlap = dist - left.radius - right.radius;
      if (overlap < 0){
        const midX = (left.x + right.x) / 2;
        const midY = (left.y + right.y) / 2;
        const collisionCircle = {x: midX, y: midY, radius: -overlap / 2}
      }
    }
  }

  moveCircle(circle){
    circle.x += circle.xMove;
    circle.y += circle.yMove;

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
  }

  randInt(max: number){
    return Math.floor(Math.random() * max);
  }

  distance(circle1, circle2){
    return Math.sqrt( (circle2.x - circle1.x) ** 2 + (circle2.y - circle1.y) ** 2 );
  }
}
