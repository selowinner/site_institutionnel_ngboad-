import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare var $: any;
@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    //debut

    console.clear();

    //const slider = new Slider(document.querySelector('[data-component="slider"]'));
    const elem = document.querySelector('[data-component="slider"]');
    const allElement = document.querySelectorAll('[data-slider]');
    const myArray = Array.prototype.slice.call(allElement);
   // console.log(myArray);
    //Next
    document.querySelector('.arrow--prev').addEventListener('click', ()=>{
        myArray.map(
            el => {
      const pos = Number(el.getAttribute('data-position'));
      const next = (pos+1) > myArray.length-1 ? 0 : pos+1;
      const go =  next;
  
      el.setAttribute('data-position', go)
    })
    })
    
    //Prev
    document.querySelector('.arrow--next').addEventListener('click', ()=>{
        myArray.map(el => {
      const pos = Number(el.getAttribute('data-position'));
      console.log(pos);
      const prev = (pos-1) < 0 ? myArray.length-1 : pos-1;
      const go = prev;
  
      el.setAttribute('data-position', go)
    })
    })

    //Jump
    document.querySelectorAll('.slider__item').forEach(sliderItem => {
      sliderItem.addEventListener('click', ()=>{
        const pos = Number(sliderItem.getAttribute("data-position"));
            console.log(pos == 0);
            
            if(pos == 0){
              //todo implementation du modal
              const mEl = document.querySelector('[data-position="0"]').lastElementChild;
              //Récuperation de l'id de chaque element
              const dataslider = mEl.id;
              console.log(mEl);
              //Ajout des deux attribues dans l'element 
              mEl.setAttribute('data-toggle', 'modal');
              mEl.setAttribute('data-target', '#exampleModalCenter'+dataslider);
              for(let i = 0; i < pos; i++) {
                const timeout = setTimeout(()=>{
                  
                    myArray.map(el => {
                      console.log('hfjhhfhf');
                      console.log(el);
                    const pos = Number(el.getAttribute('data-position'));
                    const prev = (pos-1) < 0 ? myArray.length-1 : pos-1;
                    const go = prev;
                    
                    el.setAttribute('data-position', go)
                  })
                }, 100)
              }
            }else{
              for(let i = 0; i < pos; i++) {
                const timeout = setTimeout(()=>{
                    myArray.map(el => {
                      console.log('11111');
                      console.log(el.lastElementChild);
                    const pos = Number(el.getAttribute('data-position'));
                    const prev = (pos-1) < 0 ? myArray.length-1 : pos-1;
                    const go = prev;
                    
                    el.lastElementChild.setAttribute('data-toggle', '');
                    el.lastElementChild.setAttribute('data-target', '#');
                    el.setAttribute('data-position', go)
                  })
                }, 100)
            }
            }
      })
    })

  //fin
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}

}
