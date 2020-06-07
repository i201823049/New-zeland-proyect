

var slider = $('#slider');
var siguientee = $('#btn-next');
var anterior = $('#btn-prev');


$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-'+100+'%');
		   
function moverD(){
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
	$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left', '-'+100+'%');
	});
 
}
function moverI(){
	slider.animate({
		marginLeft:0
	} ,700, function(){
	$('#slider section:last').insertBefore('#slider section:first');
		slider.css('margin-left', '-'+100+'%');
	});
 
}

siguientee.on('click',function() {
			 moverD();
			 });
anterior.on('click',function() {
			 moverI();
			 });
function autoplay() {
	Interval = setInterval(function(){
		moverD();
		
	},4000);
}
autoplay();

$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});
	