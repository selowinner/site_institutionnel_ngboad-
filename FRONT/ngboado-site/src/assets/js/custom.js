function openMenu(){
    console.log("Activation du menu");
    $("#myNav").css("width","100%");
}

function closeMenu(){
    console.log("Activation du menu");
    $("#myNav").css("width","0%");
}

function myFunction() {
    var x = document.getElementById("prof");
    if(x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFpop() {
    var x = document.getElementById("firstPop");
    var y = document.getElementById("twoPop");
    var z = document.getElementById("threePop");

    if(x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
      z.style.visibility = "hidden";
    }
  }

  function myTpop() {
    var x = document.getElementById("twoPop");
    var y = document.getElementById("firstPop");
    var z = document.getElementById("threePop");
    if(x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
      z.style.visibility = "hidden";
    }
  }

  function myThpop() {
    var x = document.getElementById("threePop");
    var y = document.getElementById("firstPop");
    var z = document.getElementById("twoPop");
    if(x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
      z.style.visibility = "hidden";
    }
  }

  function MaFonction() {
    var x = document.getElementById("slideMission");
    if(x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function getSuggestionForm(suggElem, plainteElem, autreElem){
    suggElem.style.display = 'block';
    plainteElem.style.display = 'none';
    autreElem.style.display = 'none';
  }

  function getPlaintesForm(suggElem, plainteElem, autreElem){
    suggElem.style.display = 'none';
      plainteElem.style.display = 'block';
      autreElem.style.display = 'none';
  }

  function getAutresForm(suggElem, plainteElem, autreElem){
    suggElem.style.display = 'none';
      plainteElem.style.display = 'none';
      autreElem.style.display = 'block';
  }

  function displayAndHideImage(historiqueId, assembleId, conseilAdminId, secretarialGenId, cabinetMaketingId, conseilEcoId, courUnivId, activeElementId){
    if(activeElementId === historiqueId.id){
      historiqueId.style.display = 'block';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'none';
    }else if(activeElementId === assembleId.id){
      historiqueId.style.display = 'none';
      assembleId.style.display = 'block';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'none';
    }else if(activeElementId === conseilAdminId.id){
      historiqueId.style.display = 'none';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'block';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'none';
    }else if(activeElementId === secretarialGenId.id){
      historiqueId.style.display = 'none';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'block';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'none';
    }else if(activeElementId === cabinetMaketingId.id){
      historiqueId.style.display = 'none';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'block';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'none';
    }else if(activeElementId === conseilEcoId.id){
      historiqueId.style.display = 'none';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'block';
      courUnivId.style.display = 'none';
    }else{
      historiqueId.style.display = 'none';
      assembleId.style.display = 'none';
      conseilAdminId.style.display = 'none';
      secretarialGenId.style.display = 'none';
      cabinetMaketingId.style.display = 'none';
      conseilEcoId.style.display = 'none';
      courUnivId.style.display = 'block';
    }
  }

  function showMoreTexte(elemId, btnLirePlus){
    var elStyle = document.getElementById(`${elemId}`);
    var buttonElm = document.getElementById(`${btnLirePlus}`);
    if(elStyle.style.display === 'none'){
        elStyle.style.display = 'block';
        buttonElm.textContent = "Masquer"
    }else{
        elStyle.style.display = 'none';
        buttonElm.textContent = "Lire la suite"
    }
  }

  //SLIDER MEMBRES & PARTENAIRES
  function createSlider(arrowPrevClassName, arrowNextClassName, sliderItemClassName, dataSliderAttrName, idModalTag){
      console.clear();
      const elem = document.querySelector('[data-component="slider"]');
      const allElement = document.querySelectorAll(`${dataSliderAttrName}`);
      const myArray = Array.prototype.slice.call(allElement);
      //Next
      document.querySelector(`${arrowPrevClassName}`).addEventListener('click', ()=>{
        myArray.map(el => {
			    const pos = Number(el.getAttribute('data-position'));
			    const next = (pos+1) > myArray.length-1 ? 0 : pos+1;
			    const go =  next;
			
			    el.setAttribute('data-position', go)
		    })
      })

      //prev
      document.querySelector(`${arrowNextClassName}`).addEventListener('click', ()=>{
        myArray.map(el => {
          const pos = Number(el.getAttribute('data-position'));
          console.log(pos);
          const prev = (pos-1) < 0 ? myArray.length-1 : pos-1;
          const go = prev;
  
          el.setAttribute('data-position', go)
        })
      })

      //Jump
      document.querySelectorAll(`${sliderItemClassName}`).forEach(sliderItem => {
        sliderItem.addEventListener('click', ()=>{
          const pos = Number(sliderItem.getAttribute("data-position"));
              if(pos == 0){
                //todo implementation du modal
                const mEl = document.querySelector('[data-position="0"]').lastElementChild;
                //Récuperation de l'id de chaque element
                const dataslider = mEl.id;
                console.log(mEl);
                //Ajout des deux attribues dans l'element 
                mEl.setAttribute('data-toggle', 'modal');
                mEl.setAttribute('data-target', '#exampleModalCenter' + dataslider);
                /* if(idModalTag === "bureaux"){
                  mEl.setAttribute('data-target', '#exampleModalCenter'+dataslider);
                }else if(idModalTag === "fondateurs"){
                  mEl.setAttribute('data-target', '#fondateurModal'+dataslider);
                }else if(idModalTag === "donnateurs"){
                  mEl.setAttribute('data-target', '#donnateurModal'+dataslider);
                }else if(idModalTag === "honneurs"){
                  mEl.setAttribute('data-target', '#honneurModal'+dataslider);
                }else if(idModalTag === "assistants"){
                  mEl.setAttribute('data-target', '#assistantModal'+dataslider);
                }else if(idModalTag === "actifs"){
                  mEl.setAttribute('data-target', '#actifModal'+dataslider);
                } */

                for(let i = 0; i < pos; i++) {
                  const timeout = setTimeout(()=>{
                    
                      myArray.map(el => {
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
  }

  function jumSlider(){

  }