// возврат в начало страницы

function up() {  
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
	if(top > 0) {  
		window.scrollBy(0,((top+100)/-10));  
		t = setTimeout('up()',50);  
	} else clearTimeout(t);  
	return false;  
}

// слайдер

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// плавный скролл к якорю

$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
	$(".toggle_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

// кнопка адаптивного меню

$(document).ready(function(){
	$('.toggle_menu').click(function() {
		$('.toggle_menu ul').slideToggle();
	});
});

// -

$(document).ready(function(){
	var masText = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.','Acumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt le ctores legere me lius quoii legunt saepius. Claritas est etiam processus dynamicus.','Qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt legere me lius quoii legunt saepius. Claritas est etiam processus dynamicus.','Rodio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt le ctores legere me lius quoii legunritas est etiam processus']
	var masName = ['Michael Schmitt','David Krämer','Anna Schröder','Jason Teichmann']
	$('.block_5 .team_items').on('mouseover', function() {
		var elem = $(this).attr('id'),
			textBox = $(".team_descriptions .text p"),
			titleBox = $(".team_descriptions .title");
		if(elem == 'web') {
			textBox.text(masText[0]);
			titleBox.text('About ' + masName[0])
		}
		if(elem == 'design') {
			textBox.text(masText[1]);
			titleBox.text('About ' + masName[1])
		}
		if(elem == 'photo') {
			textBox.text(masText[2]);
			titleBox.text('About ' + masName[2])
		}
		if(elem == 'develop') {
			textBox.text(masText[3]);
			titleBox.text('About ' + masName[3])
		}
	})

	/*$(".web_design").hover(function(){
		$(".team_descriptions .text p").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse");
		$(".team_descriptions .title").text("About Michael Schmitt")
	})
	$(".ux_design").hover(function(){
		$(".team_descriptions .text p").text("Acumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt le ctores legere me lius quoii legunt saepius. Claritas est etiam processus dynamicus.");
		$(".team_descriptions .title").text("About David Krämer")
	})
	$(".photography").hover(function(){
		$(".team_descriptions .text p").text("Qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt legere me lius quoii legunt saepius. Claritas est etiam processus dynamicus.");
		$(".team_descriptions .title").text("About Anna Schröder")
	})
	$(".app_development").hover(function(){
		$(".team_descriptions .text p").text("Rodio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis quacit eorum claritatem vestigationes traverunt le ctores legere me lius quoii legunritas est etiam processus.");
		$(".team_descriptions .title").text("About Jason Teichmann")
	})*/
});

// всплывающая анимация

$(document).ready(function(){
	$("h2:not(:first)").animated("fadeInLeft");
	$(".info_box img").animated("fadeInLeft");
	$(".info_box h2, .info_box p").animated("fadeInRight");
})
