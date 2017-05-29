import { Injectable } from '@angular/core';

@Injectable()

export class Circles {

  circles = [
    { x: 50, y: 50, radius: 10 },
    { x: 75, y: 75, radius: 20 },
    { x: 115, y: 115, radius: 30 }
  ];

  myCircle(){
    return 'A wilde circle appears!';
  }
}
