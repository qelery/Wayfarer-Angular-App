import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityData } from '../citydata';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subject} from 'rxjs';
import { WeatherService} from '../weather/weather.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: any;
  searchSubject = new Subject();
  weather: any;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

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
        this.weatherService.createAPIObservable(city)
          .subscribe(response => {
            this.weather = response;
          });
      });
    this.findWeather(this.city.name);
  }

  findWeather(cityName: string): void {
    this.searchSubject.next(cityName);
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
