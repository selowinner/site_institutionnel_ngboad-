import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-agence-comit-veille',
  templateUrl: './agence-comit-veille.component.html',
  styleUrls: ['./agence-comit-veille.component.css']
})
export class AgenceComitVeilleComponent implements OnInit {

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
