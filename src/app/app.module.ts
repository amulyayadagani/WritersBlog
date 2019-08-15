import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksCategoryComponent } from './books-category/books-category.component';
import {BooksCategoryService} from './books-category/books-category.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    MoviesComponent,
    AboutComponent,
    ContactComponent,
    BooksCategoryComponent
  ],
  providers: [BooksCategoryService],
  bootstrap: [AppComponent],
  exports: [BooksCategoryComponent]
})
export class AppModule { }
