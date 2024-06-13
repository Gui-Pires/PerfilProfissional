M.AutoInit();
AOS.init();

$(window).on('scroll', function() {
	if ($(window).scrollTop() > $(window).height() / 3) {
		$('#button-pinned').addClass('block')
	} else {
		$('#button-pinned').removeClass('block')
	}
});

$('#button-pinned').on('click', function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500)
})