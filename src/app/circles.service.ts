import { Injectable } from '@angular/core';

import { Circle } from './circle.model';

@Injectable()

export class Circles {

  circles: Array<Circle> = [];

  constructor(){
    this.circles = [];
    for (let i=0; i<100; i++){
      this.circles.push({
        x: this.randInt(900),
        y: this.randInt(500),
        radius: this.randInt(100) + 10
      })
    }
  }

  randInt(max: number){
    return Math.floor(Math.random() * max);
  }
}
