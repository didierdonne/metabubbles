import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[mb-circle]',
  template: `
    <svg:circle [attr.cx]="x" [attr.cy]="y" [attr.r]="radius" [attr.fill]="color" [ngStyle]="{ 'display' : getStyle() }" />
  `,
  styleUrls: ['./src/app/circle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CircleComponent {

  @Input() x: number;
  @Input() y: number;
  @Input() radius: number;
  @Input() visible: boolean;
  @Input() color: string;

  getStyle(){
    return (this.visible ? 'inherit' : 'none');
  }
}
