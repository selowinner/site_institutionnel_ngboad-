import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-reinsertion-projet-continental',
  templateUrl: './reinsertion-projet-continental.component.html',
  styleUrls: ['./reinsertion-projet-continental.component.css']
})
export class ReinsertionProjetContinentalComponent implements OnInit {
  number = 1;
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

  dispayProgrammeNotInst() {
    var element = document.getElementById('slideMission');
    var elStyle = document.getElementById('ProgNInst');
    var elRmStyle = document.getElementById('ProgInst');
    var prInst = document.getElementById('projetInstitutionel');
    if(element.style.display === 'none'){
      //console.log(this.number == 1);
      element.style.display = 'block';
      elStyle.style.background = 'linear-gradient(to right, #660099, #0099cc)';
      elStyle.style.color = '#fff';
      elStyle.style.border = 'none';
      
      elRmStyle.style.background = '#fff';
      elRmStyle.style.color = '#4d4d4d';
      elRmStyle.style.border = '1px solid #ced4da !important';

      prInst.style.display = 'none';
      if(this.number == 1){
        $('#AutoWidth').lightSlider({
          autoWidth: true,
          loop: true,
          onSliderLoad: function() {
            $('#AutoWidth').removeClass('cS-hidden');
          }
        });
      }
      this.number = this.number + 1;
    }else{
      element.style.display = 'none';
      elStyle.style.background = '#fff';
      elStyle.style.color = '#4d4d4d';
      elStyle.style.border = '1px solid #ced4da !important';

      elRmStyle.style.background = 'linear-gradient(to right, #660099, #0099cc)';
      elRmStyle.style.color = '#fff';
      elRmStyle.style.border = 'none';

      prInst.style.display = 'block';
    }
  }
  
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
