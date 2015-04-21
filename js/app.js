var App = {
    defualt_variable:'',
    default_variable2: null,
    init: function() {
		//alert('app start');
		$(".control_group").css("display","none");
		$(".starter_panel").css("display","block");
		//reset nav
    },
    toggleNav: function(data){
    	panel_class = "." + data;
    	nav_button_class = ".nav_" + data;
    	$(".control_group").css("display","none");
    	$(".nav_btn").parent().removeClass("active");
    	$(panel_class).css("display","block");
    	$(nav_button_class).parent().addClass("active");

    },
    triggerButton: function(data){
    	alert('button fired with info' + data);
	}
};