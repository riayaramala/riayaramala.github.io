import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimatedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
