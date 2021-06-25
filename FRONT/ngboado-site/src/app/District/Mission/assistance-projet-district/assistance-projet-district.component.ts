import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-assistance-projet-district',
  templateUrl: './assistance-projet-district.component.html',
  styleUrls: ['./assistance-projet-district.component.css']
})
export class AssistanceProjetDistrictComponent implements OnInit {
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
      elStyle.style.background = 'linear-gradient(to right, #00b82c, #00b82c)';
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

      elRmStyle.style.background = 'linear-gradient(to right, #00b82c, #00b82c)';
      elRmStyle.style.color = '#fff';
      elRmStyle.style.border = 'none';

      prInst.style.display = 'block';
    }
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}

