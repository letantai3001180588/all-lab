import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {
  ngOnInit() {}
  title =Baitap2Component ;
  bt2= 
   [
    {
    "images":"assets/imagesbt2/1.jpg",
    "Name":"Nguyễn Văn Tèo",
    "date":"20-1-1999",
    "sex":"nam",
    "point":8.5
    },
    {
      "images":"assets/imagesbt2/2.jpg",
      "Name":"Phan Thị Nở",
      "date":"20-12-1999",
      "sex":"nữ",
      "point":8.5
      },
      {
        "images":"assets/imagesbt2/3.jpg",
        "Name":"Nguyễn Văn Hậu",
        "date":"20-1-2000",
        "sex":"nam",
        "point":8.5
        }
  ]
}
