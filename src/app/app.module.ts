import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { MoviesApiService } from './services/movies-api.service';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, MoviesCategoryComponent, MoviesDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MoviesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
