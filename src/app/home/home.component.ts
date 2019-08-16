import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive }    from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  changeMenu(route,event){
  	this.router.navigateByUrl('/'+route);
   }

}
