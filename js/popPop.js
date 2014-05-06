(function( $ ) {
 
    $.fn.popPop = function(options) {

 	  var settings = $.extend({
 	  	poptargetbox:"#popup_id",
 	  	poptarget:".popup",
 	  	pagebox:"#page_box",
 	  	beforeOpen : function() { console.log(this.attr('class')+" is about to open"); },//caled before popup show, this is the target popup box
 	  	afterOpen : function() { console.log(this.attr('class')+" has opened"); },//called after pop up show, this is the target popup box
 	  	afterClose : function() { console.log(this.attr('class')+" has closed"); },//called after pop up closes, this is the target popup box
 	  }, options );


 	  var lockedOptions = { // for saving varibles for use in nay function order
		 windowSize : "Not Detected",
 	  }

 	  	setWindowSize();//sets props based on onload window size
 	  	$(settings.popupclass).addClass("popup_closed");//add closed class
		$('body').scrollTop(1);
		
		$(window).resize(function(event) {
        	setWindowSize();//sets props based on resized window size
        });

	
    	 
        return this.each(function() {// attches pop up open function to each of jquery object its instainated on 
			$(this).click(function(event) {
				settings.beforeOpen.call( $(settings.poptarget) );//pass 

				$(settings.poptargetbox).show();

				$(settings.poptarget).find('.close').click(function () {//adds the close btn functions
				    $(this).parents(settings.poptargetbox).hide();
				    $(settings.pagebox).show();
				    $('body').scrollTop(lockedOptions.windowPos);
				     settings.afterClose.call( $(settings.poptarget) );
				});

				if(lockedOptions.windowSize=="small_screen")
			    {
			        $(settings.pagebox).hide();
			        $('body').scrollTop(1);
			    }

			    if (lockedOptions.windowSize=="big_screen")
			    {
				    popupHeight = $(settings.poptarget).outerHeight();
				    popwidth  = $(settings.poptarget).outerWidth();
	    	 	 	popupLeftMargin = (lockedOptions.windowWidth-popwidth)/2;
	        		//popupTopMargin = (lockedOptions.windowHeight-popupHeight)/2;
			        $(settings.poptarget).css({"left": popupLeftMargin});
			        //$(settings.poptarget).css({"top": popupTopMargin});
			     }

			     settings.afterOpen.call( $(settings.poptarget) );

			});
    	});//end each

       


         	
		function setWindowSize(){
			 lockedOptions.windowPos = $(window).scrollTop();
			 lockedOptions.windowHeight = $(window).height();
			 lockedOptions.windowWidth = $(window).width();

			if (lockedOptions.windowWidth>767){
			  lockedOptions.windowSize="big_screen";
        	  $("body").addClass("big_screen").removeClass('small_screen');
			}
			if (lockedOptions.windowWidth<768){
			  lockedOptions.windowSize="small_screen";
			  $("body").addClass("small_screen").removeClass('big_screen');
			}

        	//console.log(lockedOptions);
    	 	
			$(settings.poptargetbox).css({"min-height": lockedOptions.windowHeight});

		}
    };
 
}( jQuery ));