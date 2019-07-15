import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesApiService } from './services/movies-api.service';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { AutofocusDirective } from './autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    MoviesDisplayComponent,
    MoviesSearchComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
