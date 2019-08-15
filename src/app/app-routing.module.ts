import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksCategoryComponent } from './books-category/books-category.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'books', component:BooksComponent},
{path:'movies', component:MoviesComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path: 'books/:category', component: BooksCategoryComponent, outlet:'category'},
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'**', component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }