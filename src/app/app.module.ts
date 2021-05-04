import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { TopicsComponent } from './topics/topics.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsComponent,
    CarouselComponent,
    CarouselSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
