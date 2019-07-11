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
        .get(`${this.baseUrlApi}/movie/${cat}?api_key=${this.apikey}&page=${page}`)
        .toPromise();
    } else {
      return Promise.reject('no valid category');
    }
  }
}
