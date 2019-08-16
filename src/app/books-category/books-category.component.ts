import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { BooksCategoryService } from './books-category.service';
import $ from 'jquery';

@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class BooksCategoryComponent implements OnInit {
  selectedCategory;
  imgArray = [];
  currentImgArray = [];
  imgSize = 2;
  pageCount = 1;
  currentPage = 1;
  btn1 = 1;
  btn2 = 2;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookservice: BooksCategoryService) {
  router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
        	if(val.urlAfterRedirects.includes("books")){
        		let arr = val.urlAfterRedirects.split("/");
	        	this.selectedCategory = arr[2].substring(0,arr[2].length-1);
	        	this.imgArray = [];
	        	this.currentImgArray = [];
	        	this.getImages(this.selectedCategory);
        	}
        }
    });
   }

  ngOnInit() {
    this.pageClick(1);
  }

  getImages(selectedCategory){
  	let tempArray = [];
  	let i = 0;
  	let j = 0;
  	let arr = [];
  	tempArray = this.bookservice.getData(selectedCategory);
  	tempArray.forEach((v,index) => {
  		if(i < 6){
  			arr.push(v);
  			i++;
  		} else {
  			this.imgArray.push({"page":++j,"data":arr});
  			i = 1;
  			arr = [];
  			arr.push(v);
  		}
  	})
  	this.imgArray.push({"page":++j,"data":arr});
  	this.pageClick(this.currentPage);
  	this.pageCount = this.imgArray.length;
  }

  pageClick(id){
	this.imgArray.forEach(v => {
		if(v.page == id){
			this.currentImgArray = v.data;
		}
	})
	this.currentPage = id;
	if(this.currentPage%2 == 0){
  	$("#btn1").removeClass("active");	
  	$("#btn2").addClass("active");
	} else {
		$("#btn2").removeClass("active");	
		$("#btn1").addClass("active");
	}
  }

  firstPage(){
  	this.imgArray.forEach(v => {
		if(v.page == 1){
			this.currentImgArray = v.data;
		}
	})
	this.currentPage = 1;
  }

  lastPage(){
  	this.imgArray.forEach(v => {
		if(v.page == this.imgArray.length){
			this.currentImgArray = v.data;
		}
	})
  }

  previousPage(){
  this.currentPage--;
  if(this.currentPage < this.btn1 && this.btn1 - 1 >= 1){
	  --this.btn1;
	  --this.btn2;
  } else {
  	$("#btn2").removeClass("active");	
	  $("#btn1").addClass("active");
  }
  this.imgArray.forEach(v => {
		if(v.page == this.currentPage){
			this.currentImgArray = v.data;
		}
	})
  }

  nextPage(){
  this.currentPage++;
  if(this.currentPage > this.btn2 && this.btn2 + 1 <= this.pageCount){
	  ++this.btn1;
	  ++this.btn2;
  } else {
  	$("#btn1").removeClass("active");	
	$("#btn2").addClass("active");
  }
  this.imgArray.forEach(v => {
		if(v.page == this.currentPage){
			this.currentImgArray = v.data;
		}
	});
	
  }
}