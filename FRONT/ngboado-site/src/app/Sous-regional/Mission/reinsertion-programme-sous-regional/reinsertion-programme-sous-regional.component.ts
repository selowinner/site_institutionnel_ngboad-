import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any; 

@Component({
  selector: 'app-reinsertion-programme-sous-regional',
  templateUrl: './reinsertion-programme-sous-regional.component.html',
  styleUrls: ['./reinsertion-programme-sous-regional.component.css']
})
export class ReinsertionProgrammeSousRegionalComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    //document.getElementById("hiddenSlide").style.display = "none";
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });

    $('#programNonInst').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#programNonInst').removeClass('cS-hidden');
      }
    });

    document.getElementById("ProgNInst").addEventListener("click", function() {
      const x = document.getElementById("hiddenSlide");
      console.log(x.style.visibility);
      if(x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }); 
    
}

openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}


}