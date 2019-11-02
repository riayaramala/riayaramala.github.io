import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
  @Input() skills: [];

}
