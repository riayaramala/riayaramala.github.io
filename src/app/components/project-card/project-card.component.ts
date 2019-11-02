import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Project;

  public backGroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
   }

  getImageString(): string {
    if (!this.project || !this.project.clientName) {
      return null;
    }
    return this.project.clientName.toLowerCase().split(' ').join('').toString().concat('.png');
  }


  ngOnChanges(changes) {
    if (changes && changes.project) {
      this.backGroundImg = this.sanitizer.bypassSecurityTrustStyle(`url('../../../dist/assets/${this.getImageString()}')`)
    }
  }
}
