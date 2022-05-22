function myFunction(y) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    y.classList.toggle("change");
  }
  
  function startFunction(){
    document.getElementById("myTopnav").style.marginTop = "1%";
    document.body.style.backgroundColor = "rgb(217 217 217)"
    document.getElementById("navbars").style.display = "block";
    document.getElementById("intro-content").style.display = "none";
  }