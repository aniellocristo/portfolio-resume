$(document).ready(function(){

	$(".work-1").mouseover(function() {
		$(this).children(".hover-1").show();
  });

  $(".work-1").mouseleave(function(){
    $(this).children(".hover-1").hide();
	});
  
});
