
$(document).ready(function() {



  $('.carousel').slick({
    slidestoShow: 1,
    slidestoScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    pauseonFocus: false,
    pauseonHover: false,
    infinite: true,
    adaptiveHeight: false,
});


var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;


};




});

function myFunction() {
  var x = document.getElementById("mobile");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
};
