(function( $ ) {

    $.fn.loopScroll = function(options) {

      var settingsStuff = { onImgClick : function(){}, direction: "left", speed: 60 },
          settings     = $.extend(settingsStuff, options),
          locked       = {};

      return this.each(function() {
          locked.scrollframe = $(this);
          locked.scrollbox = $(this).find('.scroll_box');
          locked.scrollimgs = $(this).find('.r_carousel_cell');
          locked.scrollimgs.hide();
          $('.r_carousel_cell').on('click touchstart', onImgClick);


          $(this).children('.scroll_left').on('touchstart mousedown mouseover', function(e){speedup('left',185); }).on('touchend mouseup mouseout', function(e){animate();});
          $(this).children('.scroll_right').on('touchstart mousedown mouseover', function(e){speedup('right',185); }).on('touchend mouseup mouseout', function(e){animate();});
          $(locked.scrollbox).on('touchstart mousedown mouseover', function(e){locked.scrollbox.stop(); }).on('touchend mouseup mouseout', function(e){animate();});

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
            scrollboxwidth += $(this).outerWidth();
          });

          locked.scrollbox.width(scrollboxwidth+3);
        };

        var animate = function(){
          locked.scrollbox.stop();

          if (settings.direction == "right"){
            locked.start_y = -locked.scrollbox.width()-locked.scrollframe.width();
            locked.end_y = 0;
          } else if (settings.direction == "left") {
            locked.start_y = 0;
            locked.end_y = -locked.scrollbox.width()+locked.scrollframe.width();
          }

          var scrollframewidth = locked.scrollframe.width(),
              distance = Math.abs(locked.end_y - parseInt(locked.scrollbox.css("left"))),
              scrollboxAnimationOptions = {
                duration: 500 * settings.speed,
                easing:"linear",
                step: function( now, fx ){
                  locked.scrollboxanipos = now;
                },
                complete:  function() {
                  locked.scrollbox.css("left", locked.start_y);
                      animate();
                }
              };

            locked.scrollbox.animate( {left: locked.end_y}, scrollboxAnimationOptions);
          }


          var speedup = function(direction,speed){
            var scrollframewidth = locked.scrollframe.width(),
                distance = Math.abs(locked.end_y - parseInt(locked.scrollbox.css("left"))),
                options = {
                  duration: 1000 * distance / speed,
                  easing:"linear",
                  step: function( now, fx ){
                    locked.scrollboxanipos = now;
                  },
                  complete: function() {
                    locked.scrollbox.css("left", locked.start_y);
                    animate();
                  }
                };

            locked.scrollbox.stop();

            if (direction == "right") {
              locked.start_y = 0;
              locked.end_y = -locked.scrollbox.width()+locked.scrollframe.width();
            } else if (direction == "left") {
              locked.start_y = -locked.scrollbox.width()+locked.scrollframe.width();
              locked.end_y = 0;
            }

            locked.scrollbox.animate( {left: locked.end_y}, options);
          };

          function onImgClick(){
            var index = $( ".r_carousel_cell" ).index( $(this) );
            settings.onImgClick.call( index );
          }
        });
    };

}( jQuery ));

