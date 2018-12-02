$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../form/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

// $(function($){
	// $('[name="phone"]').mask("+7(999) 999-9999");
// });




// scroll up start
$(document).ready(function() {

	$(window).scroll(function() {

		if($(this).scrollTop() != 0) {

			$('#scrollUp').fadeIn();

		} else {

			$('#scrollUp').fadeOut();

		}

	});

	$('#scrollUp').click(function() {

		$('body,html').animate({scrollTop:0},800);

	});

});
// scroll up and


