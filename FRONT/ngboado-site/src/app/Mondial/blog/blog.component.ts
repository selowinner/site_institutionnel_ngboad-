import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
