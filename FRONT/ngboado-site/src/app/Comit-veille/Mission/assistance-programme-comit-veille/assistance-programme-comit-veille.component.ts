import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-assistance-programme-comit-veille',
  templateUrl: './assistance-programme-comit-veille.component.html',
  styleUrls: ['./assistance-programme-comit-veille.component.css']
})
export class AssistanceProgrammeComitVeilleComponent implements OnInit {

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
