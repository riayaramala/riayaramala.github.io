import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public safeStyle: SafeStyle;

  constructor(private domSanitizer: DomSanitizer){
    this.safeStyle = this.domSanitizer.bypassSecurityTrustStyle(`--bgc: url('../../../dist/assets/fall_colors.jpg')`);
  }

}
