import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const showMoreTexte: any;
declare const displayAndHideImage: any;

@Component({
  selector: 'app-presentation-regional',
  templateUrl: './presentation-regional.component.html',
  styleUrls: ['./presentation-regional.component.css']
})
export class PresentationRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayImage(activeElmt) {
    var historique = document.getElementById('logoHitorique');
    var assembleGe = document.getElementById('logoAssGen');
    var conseilAdm = document.getElementById('conseilAdmin');
    var secretarialGen = document.getElementById('secretarialGen');
    var cabMak = document.getElementById('cabMak');
    var conEco = document.getElementById('conEco');
    var courUniverselle = document.getElementById('courUniverselle');
    displayAndHideImage(historique, assembleGe, conseilAdm, secretarialGen, cabMak, conEco, courUniverselle, activeElmt);
  }

  showTexte(elementId, btnId) { 
    showMoreTexte(elementId, btnId);
  }

openClickMenu() { openMenu();}
closeClickMenu(){closeMenu();}
}
