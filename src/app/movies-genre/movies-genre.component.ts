import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movies-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.scss'],
})
export class MoviesGenreComponent implements OnInit {
  movies: object[] = [];
  constructor(
    private route: ActivatedRoute,
    private api: MoviesApiService,
    private router: Router,
  ) {}
  page = 1;
  id: string;
  genre:string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genre = params.name;
      this.page = 1;
      this.id = params.id;
      this.api
        .getGenreById(params.id)
        .then((data: any) => {
          console.log(data);
          this.movies = data.results;
        })
        .catch(console.error);
    });
  }

  nextPage() {
    this.api
      .getGenreById(this.id, ++this.page)
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
