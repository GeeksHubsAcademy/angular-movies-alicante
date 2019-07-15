import { Component } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
})
export class MoviesSearchComponent {
  constructor(private api: MoviesApiService) {}
  query = '';
  movies: object[] = [];
  search() {
    this.api
      .searchMovies(this.query)
      .then((data: any) => {
        console.log(data);
        this.movies = data.results;
      })
      .catch(console.error);
  }
}
