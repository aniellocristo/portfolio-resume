$(document).ready(function(){

	$(".work-1").mouseover(function() {
		$(this).children(".hover-1").fadeIn().show();
  });

  $(".work-1").mouseleave(function(){
    $(this).children(".hover-1").fadeOut();
	});

});
