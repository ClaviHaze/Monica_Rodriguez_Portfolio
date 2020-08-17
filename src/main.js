//import english from './utils/english.js';
//import spanish from './utils/spanish.js' 


// Get that hamburger menu cookin' //
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  const $navbarItems = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-start"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
    $navbarItems.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        let $burger = document.getElementById("burger");
        $burger.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});
// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}
//Change Languages 
/*const engBtn = document.querySelector('#english');
const spaBtn = document.querySelector('#spanish');
const content = document.querySelector('#content');
spaBtn.addEventListener('click', () =>  {
  content.innerHTML = '';
  content.innerHTML = spanish;
});
engBtn.addEventListener('click', () =>  {
  content.innerHTML = '';
  content.innerHTML = english;
});
*/
// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).on("load", function() {
  let Body = $("body");
  Body.addClass("preloader-site");
});

const mywork = document.querySelector('#my-work');
const heroBtn = document.querySelector('#heroBtn');
heroBtn.addEventListener('click', () =>  {
  mywork.scrollIntoView({
    behavior: 'smooth', inline: 'end',
  });
});