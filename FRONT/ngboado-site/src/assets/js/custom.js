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
    if(x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myTpop() {
    var x = document.getElementById("twoPop");
    if(x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myThpop() {
    var x = document.getElementById("threePop");
    if(x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
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
