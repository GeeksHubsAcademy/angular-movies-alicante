import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: object;
  loading = true;
  relatedMovies: object[] = [];

  constructor(private route: ActivatedRoute, private api: MoviesApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      window.scrollTo({top:0, behavior:'smooth'});
      this.loading = true;
      this.api
        .getMovieById(params.id)
        .then(res => {
          console.log(res);
          this.loading = false;
          this.movie = res;
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });

      this.api
        .getRelatedMoviesById(params.id)
        .then((res: {results: object[]}) => {
          console.log(res);
          this.relatedMovies = res.results;
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
}
