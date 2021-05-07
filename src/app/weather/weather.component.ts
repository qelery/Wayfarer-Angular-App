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
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8f63f650f9feaebdda95d2defde32cdb&&units=imperial`)
      .subscribe(response => this.weather = response);
  }
}
