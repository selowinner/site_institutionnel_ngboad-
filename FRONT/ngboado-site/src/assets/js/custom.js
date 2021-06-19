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