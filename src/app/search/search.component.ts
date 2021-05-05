import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityName: string;
  weather: any;
  searchSubject = new Subject();

  constructor(private searchService: SearchService) { }

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
