import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-agence-district',
  templateUrl: './agence-district.component.html',
  styleUrls: ['./agence-district.component.css']
})
export class AgenceDistrictComponent implements OnInit {

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
