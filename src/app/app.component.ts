import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.selector:hover{
	cursor:pointer;
  }`,
  `.artistVal {
	background-color: #adb5bd;
	padding : 10px;
	margin:10px 0px;
	border-radius: 4px;	
  }`]
})

export class AppComponent implements OnInit{
  query: string;
  artists: any;
  currentArtist:any;
  showArtist(event: any, artist: any){
	console.log(artist);
	this.query = artist.name;
	this.currentArtist = artist;
  }

  onchangeQuery(){
	console.log("In Here");
	this.currentArtist = '';
  }

  constructor(private http:HttpClient) {
    this.query = '';
  }

  ngOnInit(){
     this.http.get<Object>('../assets/data.json').subscribe(
	   data => {
		this.artists = data;
	}
  )
  }

}