import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesGenreComponent } from './movies-genre/movies-genre.component';

const routes: Routes = [
  { path: 'movies/:category', component: MoviesCategoryComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'genre/:id/:name', component: MoviesGenreComponent },
  { path: 'search', component: MoviesSearchComponent },
  { path: '**', redirectTo: 'movies/top_rated' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
