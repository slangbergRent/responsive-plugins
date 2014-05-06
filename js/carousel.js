(function( $ ) {
 	
    $.fn.loopScroll = function(options) {

    	var settings = $.extend({
    	  onImgClick : function() {  },
          direction: "left",
          speed: 60
        }, options );

    	var locked = { }
    	
 		return this.each(function() {
 			 locked.scrollframe = $(this);
 			 locked.scrollbox = $(this).find('.scroll_box');
		     locked.scrollimgs = $(this).find('.r_carousel_cell');
		     locked.scrollimgs.hide();

		     $('.r_carousel_cell').bind('click touchstart', onImgClick);
		

		    $(this).children('.scroll_left').bind('touchstart mousedown mouseover', function(e){speedup('left',185); }).bind('touchend mouseup mouseout', function(e){animate();});
		    $(this).children('.scroll_right').bind('touchstart mousedown mouseover', function(e){speedup('right',185); }).bind('touchend mouseup mouseout', function(e){animate();});
		    $(locked.scrollbox).bind('touchstart mousedown mouseover', function(e){locked.scrollbox.stop(); }).bind('touchend mouseup mouseout', function(e){animate();});

		     

	        $(window).load(function() {
	        	$('#loader').hide();
	        	
	        	 setWidth();
	        	 locked.scrollimgs.fadeIn();
	        	 animate();
        	});

	        $(window).resize(function() {
	        	 setWidth();
	        	 speedup();
        	});



	         var setWidth = function ( ){

		     	var scrollboxwidth = 0;
	        	
		     	locked.scrollimgs.each(function(index, el) {
		     			var img = $(this).find('img');
		     			//img.css('display', 'none');
		     			//img.css('display', 'inline-block');		
		        		scrollboxwidth += $(this).outerWidth();
		        		console.log('scrollboxwidth: '+scrollboxwidth);

	        	});
	        	locked.scrollbox.width(scrollboxwidth+3);
	        	console.log('scrollbox: '+locked.scrollbox.width());
	        	console.log('scrollframe: '+locked.scrollframe.width());
	        	//console.log('settings.direction : '+settings.direction );



			 	 

		     }

        	
        	var animate = function(){
        		locked.scrollbox.stop();

        		if (settings.direction == "right") {
			        locked.start_y -locked.scrollbox.width()-locked.scrollframe.width();
			        locked.end_y = 0;
			      } else if (settings.direction == "left") {
			        locked.start_y = 0;
			        locked.end_y = -locked.scrollbox.width()+locked.scrollframe.width();
			      }

        		var scrollframewidth = locked.scrollframe.width();
        		var distance = Math.abs(locked.end_y - parseInt(locked.scrollbox.css("left")));

        		 locked.scrollbox.animate({ 
        		 	left: locked.end_y}, {
				    duration: 1000 * distance / settings.speed,
				    easing:"linear",
				    step: function( now, fx ){
				      locked.scrollboxanipos = now;
				    },
				    complete:  function() { 
				    	locked.scrollbox.css("left", locked.start_y);
            			animate();
				    } 
				  });
        	}
		      

		    var speedup = function(direction,speed){
		    	locked.scrollbox.stop();
        		if (direction == "right") {
			        locked.start_y = -locked.scrollbox.width()+locked.scrollframe.width();
			        locked.end_y = 0;
			      } else if (direction == "left") {
			        locked.start_y = 0;
			        locked.end_y = -locked.scrollbox.width()+locked.scrollframe.width();
			      }

		    	var scrollframewidth = locked.scrollframe.width();
        		var distance = Math.abs(locked.end_y - parseInt(locked.scrollbox.css("left")));

        		 locked.scrollbox.animate({ 
        		 	left: locked.end_y}, {
				    duration: 1000 * distance / speed,
				    easing:"linear",
				    step: function( now, fx ){
				      locked.scrollboxanipos = now;
				    },
				    complete:  function() {
				    	/*var newclone = locked.scrollbox.clone().addClass('sec').css('left', scrollframewidth);;
				    	locked.scrollframe.append(newclone);
				    	locked.scrollbox.remove();
				    	animate2(newclone);*/
				    	locked.scrollbox.css("left", locked.start_y);
            			animate();
				    } 
				  });

		    }

		    
		     var animate2 = function (elment){
		     	var distance = Math.abs(0 - parseInt(locked.scrollbox.css("left")));
		     	elment.animate({ 
        		 	left: 0}, {
				    duration: 1000 * distance / 150,
				    easing:"linear",
				    step: function( now, fx ){
				      //locked.scrollboxanipos = now;
				    },
				    complete:  function() {
				    	//var newclone = locked.scrollbox.clone().addClass('sec').css('left', scrollframewidth);;
				    	//locked.scrollframe.append(newclone);
				    	//locked.scrollbox.remove();
				    	//locked.scrollbox.css("left", locked.start_y);
            			//animate();
				    } 
				  });
		     }
		  

		  
		     function onImgClick(){
		     	var index = $( ".r_carousel_cell" ).index( $(this) );
		     	settings.onImgClick.call( index );
			}
   		});
    };
 
}( jQuery ));
 