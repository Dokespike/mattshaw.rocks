var windowh = window.innerHeight;

function getHeight(){
	document.getElementById('mission').setAttribute("height", windowh);
	document.getElementById('designers').setAttribute("height", windowh);
	document.getElementById('portfolio').setAttribute("height", windowh);
	document.getElementById('contact').setAttribute("height", windowh);
}


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
