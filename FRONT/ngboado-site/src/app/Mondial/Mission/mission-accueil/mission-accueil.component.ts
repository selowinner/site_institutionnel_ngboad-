import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 

@Component({
  selector: 'app-mission-accueil',
  templateUrl: './mission-accueil.component.html',
  styleUrls: ['./mission-accueil.component.css']
})
export class MissionAccueilComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    const containerMenu = document.querySelector('.container-menu');
    const btnMenu = document.querySelector('.btn-menu');
    
    btnMenu.addEventListener('click', () => {
    
        containerMenu.classList.toggle('active')
    
    })
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
