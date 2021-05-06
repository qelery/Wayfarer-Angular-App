import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  cityName: string;
  weather: any;
  searchSubject = new Subject();

  constructor(private searchService: WeatherService) { }

  findWeather(cityName: string): void {
    this.searchSubject.next(cityName);
  }

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(city => {
        this.searchService.createAPIObservable(city)
          .subscribe(response => this.weather = response);
      });
  }
}
