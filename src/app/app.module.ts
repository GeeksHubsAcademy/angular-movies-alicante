import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { MoviesApiService } from './services/movies-api.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent, MoviesCategoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MoviesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
