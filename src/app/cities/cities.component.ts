import { Component, OnInit } from '@angular/core';
import { cityData } from '../citydata.js';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  citiesInfo: any;
  clickedCity: any;

  constructor() {
    this.citiesInfo = cityData;
    this.clickedCity = this.citiesInfo[0];
  }

  ngOnInit(): void {
  }

  showCityPost(id: number): void {
    this.clickedCity = this.citiesInfo[id];
  }
}
