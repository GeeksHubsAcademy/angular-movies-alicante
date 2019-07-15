import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  baseUrlApi = 'https://api.themoviedb.org/3';
  apikey = '323112ea2281b9eb70f319f4df422c6b';

  constructor(private http: HttpClient) {}

  getCategory(cat: string, page: number = 1) {
    const validCategories = ['top_rated', 'upcoming', 'popular'];
    if (validCategories.includes(cat)) {
      return this.http
        .get(
          `${this.baseUrlApi}/movie/${cat}?api_key=${this.apikey}&page=${page}`,
        )
        .toPromise();
    } else {
      return Promise.reject('no valid category');
    }
  }
  searchMovies(query: string) {
    let url = `${this.baseUrlApi}/search/movie?api_key=${
      this.apikey
    }&query=${query}&language=es-ES`;
    return this.http.get(url).toPromise();
  }
  getMovieById(id: string) {
    return this.http
      .get(`${this.baseUrlApi}/movie/${id}?api_key=${this.apikey}`)
      .toPromise();
  }
  getRelatedMoviesById(id: string, page: number = 1) {
    return this.http
      .get(`${this.baseUrlApi}/movie/${id}/similar?api_key=${this.apikey}&page=${page}`)
      .toPromise();
  }
}
