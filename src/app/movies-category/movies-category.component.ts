import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss'],
})
export class MoviesCategoryComponent implements OnInit {
  category: string;
  movies: object[] = [];
  constructor(private route: ActivatedRoute, private api: MoviesApiService, private router: Router) {}
  page = 1;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');

      this.api
        .getCategory(params.category)
        .then((data: any) => {
          console.log(data);
          this.movies = data.results;
        })
        .catch( error => {
          if (error === 'no valid category') {
            // redirect
            this.router.navigate(['movies/top_rated']);

          } else {
             alert('Ups, try again');
          }
        });
    });
  }



  nextPage() {
    let cat = this.category.replace(' ', '_');
        this.api
          .getCategory(cat, ++this.page)
          .then((data: any) => {
            console.log(data);
            this.movies = [...this.movies, ...data.results];
          })
          .catch(error => {
            if (error === 'no valid category') {
              // redirect
              this.router.navigate(['movies/top_rated']);
            } else {
              alert('Ups, try again');
            }
          });
  }
}
