var nav = $(".navbar");

var menuItems = [
	{"scroll_to": "header", "elem": $("#header")},
	{"scroll_to": "about", "elem": $("#about")},
	{"scroll_to": "welcome", "elem": $("#welcome")},
	{"scroll_to": "faq", "elem": $("#faq")},
	{"scroll_to": "about", "elem": $("#about")}
];
var menuItemsLen = menuItems.length;
var selectedMenu = "header";
var scrollingToItem = false;

$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	var middleScreenHeight = scrollHeight + ($(this).height() / 2);

	for(var i = 0; i < menuItemsLen; i++) {
		var topOffset = menuItems[i]["elem"].offset().top;
		var height = menuItems[i]["elem"].height();

		if(middleScreenHeight >= topOffset && middleScreenHeight <= (topOffset + height)) {
			if(selectedMenu != menuItems[i]["scroll_to"] && !scrollingToItem) {
				var scroll_to = menuItems[i]["scroll_to"];
				// change the selected menu element
				$(".navbar-nav li").removeClass("active");
				$(".navbar-nav li a[scroll_to='"+scroll_to+"']").parent().addClass("active");
				selectedMenu = scroll_to;
			}
		}
	}
});

$(".navbar-nav li a").click(function(e) {
	var scrollTo = $(this).attr('scroll_to');
	var elem = $("#"+scrollTo);
	scrollingToItem = true;
	$('html, body').animate({
        scrollTop: elem.offset().top - nav.height()
    }, 1000, function() {
    	scrollingToItem = false;
    });
    $(".navbar-nav li").removeClass("active");
    $(this).parent().addClass("active");
    e.preventDefault();
});

$(document).click(function(e) {
	if($(window).width() < 768){
  if (!$(e.target).closest('.navbar-default, .navbar-fixed-top').length && !$(e.target).class('.drawer')) {

    $(".navbar-toggle").click();
  }
}
})

console.log("%c I <3 Moorestown Programming Club!!!  %c  ", 
	"color: #004C99; font-weight: bold;", 
	"background-image: url('http://emojipedia.org/wp-content/uploads/2013/07/160x160x12-face-with-stuck-out-tongue-and-winking-eye.png.pagespeed.ic.Q9pZ4icXCn.jpg'); background-size: cover"
);
