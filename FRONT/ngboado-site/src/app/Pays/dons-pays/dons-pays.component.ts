import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-dons-pays',
  templateUrl: './dons-pays.component.html',
  styleUrls: ['./dons-pays.component.css']
})
export class DonsPaysComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $(document).ready(function() {
      console.clear();

      //Gestion des type de don
      $("input[name$='typeDons']").click(function() {
        var test = $(this).val();
        var typeEspeceStyle = document.getElementById('typeEspece');
        var typeNatureStyle = document.getElementById('typeDonsNature');
        var typeAutreStyle = document.getElementById('typeDonsAutre');

        if(test === "espece" && typeEspeceStyle.style.display === "none"){
          typeEspeceStyle.style.display = 'block';
          typeNatureStyle.style.display = 'none';
          typeAutreStyle.style.display = 'none';
        }else if(test === "nature" && typeNatureStyle.style.display === "none"){
          typeEspeceStyle.style.display = 'none';
          typeNatureStyle.style.display = 'block';
          typeAutreStyle.style.display = 'none';
        }else if(test === "autre" && typeAutreStyle.style.display === "none"){
          typeEspeceStyle.style.display = 'none';
          typeNatureStyle.style.display = 'none';
          typeAutreStyle.style.display = 'block';
        }else{
          typeEspeceStyle.style.display = 'none';
          typeNatureStyle.style.display = 'block';
          typeAutreStyle.style.display = 'none';
        }
      });

      //Gestion des Bénéficiaire
      $("input[name$='beneficiaire']").click(function() {
        var test1 = $(this).val();
        var beneficiaireProgrammeSelectStyle = document.getElementById('beneficiaireProgrammeSelect');
        var beneficiaireOngStyle = document.getElementById('beneficiaireOng');
        var beneficiaireFondSelectStyle = document.getElementById('beneficiaireFondSelect');

        if(test1 === "programmes" && beneficiaireProgrammeSelectStyle.style.display === "none"){
          beneficiaireProgrammeSelectStyle.style.display = 'block';
          beneficiaireOngStyle.style.display = 'none';
          beneficiaireFondSelectStyle.style.display = 'none';
        }else if(test1 === "ong" && beneficiaireOngStyle.style.display === "none"){
          beneficiaireProgrammeSelectStyle.style.display = 'none';
          beneficiaireOngStyle.style.display = 'block';
          beneficiaireFondSelectStyle.style.display = 'none';
        }else if(test1 === "fonds" && beneficiaireFondSelectStyle.style.display === "none"){
          beneficiaireProgrammeSelectStyle.style.display = 'none';
          beneficiaireOngStyle.style.display = 'none';
          beneficiaireFondSelectStyle.style.display = 'block';
        }else{
          beneficiaireProgrammeSelectStyle.style.display = 'none';
          beneficiaireOngStyle.style.display = 'block';
          beneficiaireFondSelectStyle.style.display = 'none';
        }
      });

    });
  }

  openClickMenu() {openMenu();}
  closeClickMenu() {closeMenu();}

}
