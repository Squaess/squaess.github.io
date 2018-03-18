function setModal(L) {
  "use strict";

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");


  function createFunction(trigger) {
    var  x = document.getElementById(trigger);

    function moda(){
      modal.style.display = "block";
      modalImg.src = "../img/"+trigger+".jpg";
      captionText.innerHTML = trigger;
    }

    return moda;
  }

  var pref;
  var elem;
  var i;
  for(i = 0; i < L.length; i = i + 1) {
    pref = L[i];
    elem = document.getElementById(pref);
    elem.addEventListener("click", createFunction(pref));
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

}

function modalSetup(className) {
  "use strict";
  var L = document.getElementsByClassName(className);
  var prefixes = [];
  var i;
  for(i = 0; i < L.length; i = i+1){
    prefixes[i] = L[i].getAttribute("prefix");
  }
  setModal(prefixes);
}

window.onload = function() {
  "use strict";
  modalSetup("toTrigger");
}

/*
window.onload = function() {

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var trigger = document.getElementById("oceloteId");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function cik(){
    modal.style.display = "block";
    modalImg.src = "../img/ocelote.jpg";
    captionText.innerHTML = "Ocelote";
}
trigger.addEventListener('click',cik, false);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
}
*/
