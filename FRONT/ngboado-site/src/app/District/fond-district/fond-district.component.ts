import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-fond-district',
  templateUrl: './fond-district.component.html',
  styleUrls: ['./fond-district.component.css']
})
export class FondDistrictComponent implements OnInit {

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
