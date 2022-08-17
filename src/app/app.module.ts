import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
