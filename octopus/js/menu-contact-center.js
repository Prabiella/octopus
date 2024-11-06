window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var back = document.getElementById("back");
var mail = document.getElementById("mail-link");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    back.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}