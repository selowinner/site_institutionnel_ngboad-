import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-fond-continental',
  templateUrl: './fond-continental.component.html',
  styleUrls: ['./fond-continental.component.css']
})
export class FondContinentalComponent implements OnInit {

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
