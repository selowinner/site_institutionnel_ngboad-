import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-prevention-projet-regional',
  templateUrl: './prevention-projet-regional.component.html',
  styleUrls: ['./prevention-projet-regional.component.css']
})
export class PreventionProjetRegionalComponent implements OnInit {

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
