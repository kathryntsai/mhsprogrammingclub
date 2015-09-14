jQuery.fn.updateWithText = function(text, speed)
{
	var dummy = $('<div/>').html(text);

	if ($(this).html() != dummy.html())
	{
		$(this).fadeOut(speed/2, function() {
			$(this).html(text);
			$(this).fadeIn(speed/2, function() {
				//done
			});
		});
	}
}

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

jQuery(document).ready(function($) {

	(function updateSocialMediaIcons()
	{
        var now = moment();
        var date = now.format('LLLL').split(' ',4);
        date = date[0] + ' ' + date[1] + ' ' + date[2] + ', ' + date[3];

		$('.social-icons').html(date);
		date2 = now.format('LLLL').substring(date.length, now.format('LLLL').length - 3);
		date3 = now.format('LLLL').substring(now.format('LLLL').length - 3).toLowerCase();
		$('.time').html(date2 +  '<span class="sec">'+now.format('ss')+'</span>' + date3, 2000);
		
	})();
}