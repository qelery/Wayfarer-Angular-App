import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopicsComponent } from './topics/topics.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsComponent,
    CarouselComponent,
    CarouselSlideComponent,
    CitiesComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
