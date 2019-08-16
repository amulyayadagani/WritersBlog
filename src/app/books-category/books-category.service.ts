import { Injectable } from '@angular/core';

const config = [ 
	  { "category": "telugu", 
	  	"data": [{"id": 1, "category": "telugu", "title": "Anitara_Saadyudu", "src":"assets/telugu/Anitara_Saadyudu.jpg"},
			  {"id": 2, "category": "telugu", "title": "Arorudrudu", "src":"assets/telugu/Arorudrudu.jpg"},
			  {"id": 3, "category": "telugu", "title": "Ashwa_Bharatam", "src":"assets/telugu/Ashwa_Bharatam.jpg"},
			  {"id": 4, "category": "telugu", "title": "Black_And_White", "src":"assets/telugu/Black_And_White.jpg"},
			  {"id": 5, "category": "telugu", "title": "Krutaguy", "src":"assets/telugu/Krutaguy.jpg"},
			  {"id": 6, "category": "telugu", "title": "Mruthyunjayudu", "src":"assets/telugu/Mruthyunjayudu.jpg"},
			  {"id": 7, "category": "telugu", "title": "Rendosaari_Koodaa_ninne_Premisthaa", "src":"assets/telugu/Rendosaari_Koodaa_ninne_Premisthaa.jpg"},
			  {"id": 8, "category": "telugu", "title": "Thrikaala_Yagyam", "src":"assets/telugu/Thrikaala_Yagyam.jpg"},
			  {"id": 9, "category": "telugu", "title": "Vasheekara_Yagnam", "src":"assets/telugu/Vasheekara_Yagnam.jpg"}] 
	  },
	  { "category": "kannada", 
	  	"data": [{"id": 10, "category": "kannada", "title": "Antharyudhadha", "src":"assets/kannada/Antharyudhadha.jpg"},
			  {"id": 11, "category": "kannada", "title": "Aathmagamana", "src":"assets/kannada/Aathmagamana.jpg"},
			  {"id": 12, "category": "kannada", "title": "Agnatha_Sundhari", "src":"assets/kannada/Agnatha_Sundhari.jpg"},
			  {"id": 13, "category": "kannada", "title": "Cross_Roads", "src":"assets/kannada/Cross_Roads.jpg"},
			  {"id": 14, "category": "kannada", "title": "Devaru_Vs_Manava", "src":"assets/kannada/Devaru_Vs_Manava.jpg"},
			  {"id": 15, "category": "kannada", "title": "Sankalpa", "src":"assets/kannada/Sankalpa.jpg"}]
	  },
	  { "category": "english", 
	  	"data": [{"id": 16, "category": "english", "title": "The Dictator Of Dark", "src":"assets/english/The_Dictator_Of_The_Dark.jpg"},
			  {"id": 17, "category": "english", "title": "The Enemy Of Mankind", "src":"assets/english/The_Enemy_Of_Mankind.jpg"}]
	  },
	  { "category": "tamil", 
	  	"data": [{"id": 18, "category": "tamil", "title": "", "src":"assets/tamil/1.jpg"},
			  {"id": 19, "category": "tamil", "title": "", "src":"assets/tamil/2.jpg"},
			  {"id": 20, "category": "tamil", "title": "", "src":"assets/tamil/3.jpg"}]
	  }
  ];

@Injectable({
  providedIn: 'root'
})
export class BooksCategoryService {

  constructor() { }

  getData(category){
  let data = [];
  	for(let i = 0; i < config.length; i++ ){
  		if(category == config[i].category){
  			data = config[i].data;
  		}
  	}
  	return data;
  }

}