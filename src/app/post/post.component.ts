import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityData } from '../citydata';
import { distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: any;
  searchSubject = new Subject();
  weather: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = cityData.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
        this.findWeather(this.city.name);
        this.dateFormatter();
        this.sortPostsByDate();
      });
    this.searchSubject
      .pipe(distinctUntilChanged())
      .subscribe(city => {
        this.createAPIObservable(city)
          .subscribe(response => {
            this.weather = response;
          });
      });
    this.findWeather(this.city.name);
  }

  findWeather(cityName: string): void {
    this.searchSubject.next(cityName);
  }

  createAPIObservable(city): Observable<object> {
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`);
  }

  dateFormatter(): void {
    this.city.posts = this.city.posts.map(post => {
        post.date = new Date(post.date);
        return post;
    });
  }

  sortPostsByDate(): void {
    this.city.posts = this.city.posts.sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });
  }
}
