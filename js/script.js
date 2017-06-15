$('.mob_menu').click(function(){
	$('.main_menu').animate({top: '0'},200).click(function(){
		$('.main_menu').animate({top: '-100vh'},200)
	})
});

function blink(selector) {
    $(selector).fadeOut('slow',function() {
        $(this).fadeIn('slow',function() {
        	blink(this);
        });
    });
}
$(document).ready(function (){
    blink('.scroll_pointer');
    $(".main_menu").on("click","a", function (event) {
    event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

});

$('.enter').hover(function(){
	$(this).animate({transition: '3s'})
})

$('.packets_content .enter').click(function(){
	$('.modal-title').text('Smart Start');
})

$('.golden_standart .enter').click(function(){
	$('.modal-title').text('Golden Standard');
})

$('.advanced .enter').click(function(){
	$('.modal-title').text('Personal Advanced');
})

$('.customized .enter').click(function(){
	$('.modal-title').text('Customized');
})