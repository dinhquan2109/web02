$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.wrapper').addClass('sticky');
        }else{
            $('.wrapper').removeClass('sticky');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var logoContainer = document.querySelector('.logomenu img');
    var scrollPosition = window.scrollY;
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollPosition) {
        logoContainer.src = 'image/logomenuden.png';
      } else {
        logoContainer.src = 'image/logomenu.png'; 
      }

      scrollPosition = window.scrollY;
    });
  });