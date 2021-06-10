import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  inputs: ['artist']
})
export class ArtistItemComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit(): void {
	console.log(this.artist);
  }

}
