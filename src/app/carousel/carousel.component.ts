import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slideImageUrls: string[];

  constructor() {
    // To keep slides consistent, image resolution should be 1920px x 600px
    this.slideImageUrls = [
      '/assets/images/banner-image_1920x600.jpg',
      '/assets/images/woman-airport_1920x600.jpg',
      '/assets/images/people-on-mountain_1920x600.jpg',
    ];
  }

  ngOnInit(): void {
  }

}
