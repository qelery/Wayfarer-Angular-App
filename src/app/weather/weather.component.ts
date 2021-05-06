import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {

  @Input() cityName: any;
  weather: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.findWeather(this.cityName);
  }

  ngOnChanges(): void {
    this.findWeather(this.cityName);
  }

  findWeather(cityName: string): void {
    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
      .subscribe(response => this.weather = response);
  }
}
