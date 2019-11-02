import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { PillComponent } from './components/pill/pill.component';
import { HeadingComponent } from './components/heading/heading.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectCardComponent,
    SkillSetComponent,
    PillComponent,
    HeadingComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialModule
  ],
  entryComponents: [ProjectCardComponent],
  providers: [ProjectCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
