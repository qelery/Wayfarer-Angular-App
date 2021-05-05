import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  citiesInfo: any;

  constructor() {
    this.citiesInfo = [
        {
        name: 'London',
        pictureUrl: 'https://www.kimptonhotels.com/blog/wp-content/uploads/2018/09/JL_201410_Visit_London_1780-Edit-Credit-London-Partnersresized.jpg',
          posts: [
          {
            title: 'London Bridge is falling down',
            body: 'body of post 1',
            pictureUrl: 'https://shelfaware.files.wordpress.com/2015/06/london_bridge_is_falling_down_by_zkojek-d48ozpc.jpg',
          },
          {
            title: 'London 2',
            body: 'body of london post 2',
            pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4V1CVhUGpjAV223aKLRwl9AcuyleNb6n8Vw&usqp=CAU',
          },
        ],
      },
      {
        name: 'Paris',
        pictureUrl: 'https://live.staticflickr.com/1185/1047043772_cb85c10ec9_b.jpg',
        posts: [
          {
            title: 'Paris is looking like a Second New York',
            body: 'body of post 1',
            pictureUrl: 'https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2021/04/paris-trash-hp.jpg?quality=80&strip=all&ssl=1',
          },
          {
            title: 'Paris adopts new flag design',
            body: 'After talking with European Union Commitee, France feels it is the best course of action to represent a new modern flag that eliminates any bias or cultural aggression, therefore the new proposed flag for the the artistic country would be the following:',
            pictureUrl: 'https://thumbs.dreamstime.com/b/white-flag-waving-wind-isolated-black-background-151385576.jpg',
          },
        ],
      },
      {
        name: 'Chicago',
        pictureUrl: 'https://media.timeout.com/images/105658075/image.jpg',
        posts: [
          {
            title: 'Great Chicago Fire',
            body: 'body of post 1',
            pictureUrl: 'https://media.nationalgeographic.org/assets/photos/000/277/27713.jpg'          },
          {
            title: 'Best place to eat in Chicago',
            body: 'body of post 2',
            pictureUrl: 'https://www.chicagotribune.com/resizer/6-XH3-AeNZIS_HXEiKkCEybbH28=/800x532/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/BPMZMYJZ5BFX3NUDC36IVHS7NI.jpg'
          },
        ],
      },
      {
        name: 'Sydney',
        pictureUrl: 'https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg.1538745208398.image.750.563.low.jpg',
        posts: [
          {
            title: `If the people don't kill you, the animals will`,
            body: 'body of post 1',
            pictureUrl: 'https://i.pinimg.com/originals/5d/59/db/5d59dbde846a7aa40542a1e5b8f6b5fb.jpg'          },
          {
            title: 'Best place to eat in Chicago',
            body: 'body of post 2',
            pictureUrl: 'https://media0.giphy.com/media/l0MYCedQ9qAtRZrQQ/giphy.gif'
          },
        ],
      }
    ];
  }

  ngOnInit(): void {
  }

}
