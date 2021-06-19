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