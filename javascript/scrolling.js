// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('header').outerHeight();
var ulbarHeight = $('ulheader').outerHeight();
//var navbarHeight = 100px;



$(window).scroll(function(){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
		$('.content').css({'margin-top':ulbarHeight + 'px'});
		//$('.content').css({'margin-top':navbarHeight - '100px'});
    } else if(st<=navbarHeight + 100){
        // Scroll Up
		
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}