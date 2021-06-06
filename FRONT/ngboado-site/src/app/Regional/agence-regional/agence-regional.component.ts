import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-agence-regional',
  templateUrl: './agence-regional.component.html',
  styleUrls: ['./agence-regional.component.css']
})
export class AgenceRegionalComponent implements OnInit {

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
