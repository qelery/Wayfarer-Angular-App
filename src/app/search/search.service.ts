import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// We will put our search logic in this service, can be used in other parts of the application

// Instead of just doing @Injectable() we can do it the way it is below, instead of adding it to app.module.ts explicitly

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  createAPIObservable(city): Observable<object> {
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`);
  }
}
