import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityData } from '../citydata';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = cityData.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
        this.dateFormatter();
        this.sortPostsByDate();
      });
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
    console.log(this.city.posts);
  }
}
