import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;
@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
