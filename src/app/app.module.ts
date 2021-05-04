import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SubTopicComponent } from './sub-topic/sub-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    SlideshowComponent,
    SubTopicComponent
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
