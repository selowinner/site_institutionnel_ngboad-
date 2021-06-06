import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-agence-sous-regional',
  templateUrl: './agence-sous-regional.component.html',
  styleUrls: ['./agence-sous-regional.component.css']
})
export class AgenceSousRegionalComponent implements OnInit {

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
