import { Component } from '@angular/core';
import { Router, RouterLinkActive }    from '@angular/router'; 
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  changeMenu(route,event){
  	this.router.navigateByUrl('/'+route);
  	//$(event.target).addClass("active");
	}
}
