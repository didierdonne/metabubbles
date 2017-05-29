import { Component } from '@angular/core';

@Component({
  selector: '[mb-circle]',
  inputs: ['circle'],
  template: `
    <svg:circle
      [attr.cx]="circle.x"
      [attr.cy]="circle.y"
      [attr.r]="circle.radius"
    />
  `,
  styleUrls: ['./src/app/circle.component.css']
})

export class CircleComponent {

}
