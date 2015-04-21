$(document).ready(function () {

	App.init();

	$(".nav_btn").on("click",function(){
		panel_selection = $(this).data("navPanel");
		//console.log(panel_selection);
		App.toggleNav(panel_selection);
	});


});