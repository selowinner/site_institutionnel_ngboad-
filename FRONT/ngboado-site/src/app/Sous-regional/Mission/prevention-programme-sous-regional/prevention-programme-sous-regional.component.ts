import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-prevention-programme-sous-regional',
  templateUrl: './prevention-programme-sous-regional.component.html',
  styleUrls: ['./prevention-programme-sous-regional.component.css']
})
export class PreventionProgrammeSousRegionalComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });

    $('#AutoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#AutoWidth').removeClass('cS-hidden');
      }
    });
  }
  
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
