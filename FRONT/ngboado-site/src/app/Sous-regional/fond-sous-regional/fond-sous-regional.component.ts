import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-fond-sous-regional',
  templateUrl: './fond-sous-regional.component.html',
  styleUrls: ['./fond-sous-regional.component.css']
})
export class FondSousRegionalComponent implements OnInit {

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
