import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  searchSubject = new Subject();
  constructor(private http: HttpClient) { }


  createAPIObservable(city): Observable<object> {
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`);
  }

  findWeather(cityName: string): void {
    this.searchSubject.next(cityName);
  }
}
