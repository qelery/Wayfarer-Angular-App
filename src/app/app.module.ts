import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SubTopicComponent } from './sub-topic/sub-topic.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubTopicComponent,
    CarouselComponent,
    CarouselSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
