import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentview',
  templateUrl: './contentview.component.html',
  styleUrls: ['./contentview.component.css']
})
export class ContentviewComponent implements OnInit {

  constructor() { }

  public imagesUrl: any[];
  ngOnInit() {
    this.imagesUrl = [
      '../../assets/slidersImage1.png',
      '../../assets/slidersImage2.png'
    ];
  }
}
