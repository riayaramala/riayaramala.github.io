import { Component, Input } from '@angular/core';

@Component({
  selector: 'pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  @Input() skill: string;

}
