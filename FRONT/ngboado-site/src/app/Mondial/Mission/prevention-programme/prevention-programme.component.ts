import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-prevention-programme',
  templateUrl: './prevention-programme.component.html',
  styleUrls: ['./prevention-programme.component.css']
})
export class PreventionProgrammeComponent implements OnInit {

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