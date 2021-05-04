import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  allSlidesInfo: SlideInfo[];

  constructor() {
    // To keep slides consistent, image resolution should be 1920px x 600px
    this.allSlidesInfo = [
      {
        imgSrc: "/assets/images/banner-image_1920x600.jpg",
        caption: "travel + community = wayfarer"
      },
      {
        imgSrc: "/assets/images/woman-airport_1920x600.jpg",
        caption: "travel + community = wayfarer"
      },
      {
        imgSrc: "/assets/images/people-on-mountain_1920x600.jpg",
        caption: "travel + community = wayfarer"
      },
    ]
  }

  ngOnInit(): void {
  }

}

export interface SlideInfo {
  imgSrc: string,
  caption: string,
}
