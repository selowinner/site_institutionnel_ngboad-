import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-fond-regional',
  templateUrl: './fond-regional.component.html',
  styleUrls: ['./fond-regional.component.css']
})
export class FondRegionalComponent implements OnInit {

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
