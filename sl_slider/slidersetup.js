function slidersetup(){
  $slideImg =  $('.slideimg');
  var glide = $('.slider').glide({
    navigationCenter: false,
    navigation:'#slidenav',
    afterResize: function() {
      thubnailResize();
    },
    beforeInit: function() {
      $('.slideimg').each(function(index, el) {
      	$(this).load(function() {
      		marginfix($(this));
      	});
        
      });
    },
    afterInit: function() {
      console.log($('.slideimg').eq(0).attr('src') + $('.slideimg').eq(2).attr('src'));
      $(".slidecount").text($slideImg.length);
      $(".slidetitle").text($slideImg.eq(0).attr('title'));
 
      $('.slider-nav__item').each(function(index, el) {
        var thumb = $slideImg.eq(index).clone().css({
          width: '100px',
          height: '70px',
          margin:'0px',
          clear:'both'
        }).addClass('thumb');
        console.log($slideImg.eq(index).attr('src'));
        $('.slider-nav__item').eq(index).append(thumb);
        $(this).append(thumb);
      });
 
      thubnailResize();
    },
    afterTransition: function(){
      var curslide = glide.current();
      var curlsideobj = $(".slideimg").eq(curslide);
      $(".slidetitle").text(curlsideobj.attr('title'));
      $(".slidenum").text(curslide);
    }
  }).data('api_glide')
 
 
  function marginfix(img){
    var margintop = (img.height()/2)-img.height();
    img.css('margin-top', margintop);
  }
 
 
  function thubnailResize(){
    var thumbcount = $('.slider-nav__item').length;
    var thumbwidth = $('.slider-nav__item').outerWidth(true);
    var thumbdisplaycount = $('#navholder').innerWidth()/thumbwidth;
    thumbdisplaycount=Math.floor(thumbdisplaycount)-1;
    var displaycountwidth = thumbwidth*thumbdisplaycount;
    var allthumbwidth = thumbwidth*thumbcount;
    var steps = thumbcount-thumbdisplaycount;
    var curstep = 0;
    $('#slidenav').css('width', allthumbwidth);
    $('.thumb_nav').hide();
    if(allthumbwidth > $('#navcontainer').innerWidth()){
 
      if(thumbdisplaycount < 3){$('#navcontainer').css('display', 'none');}
 
      else{
        $('#navholder').css('width', displaycountwidth);
        $('.thumb_next').show();
 
        $('.thumb_prev').click(function(event) {
          if(curstep != 0){
            $('.thumb_prev').show();
            $('#slidenav').css('left',"+="+thumbwidth);
            console.log('prev: '+$('#slidenav').css('left'));
            curstep--;
          }
          if(curstep == 0){$('.thumb_prev').hide();}
 
          if(curstep != steps){$('.thumb_next').show();}
        });
 
        $('.thumb_next').click(function(event) {
 
 
          if(curstep != steps){
            $('.thumb_next').show();
            $('#slidenav').css('left',"-="+thumbwidth);
            console.log('next: '+$('#slidenav').css('left'));
            curstep++;
          }
 
          if(curstep == steps){$('.thumb_next').hide();}
 
          if(curstep != 0){$('.thumb_prev').show();}
 
        });
 
      }
 
    }
    else{$('#navholder').css('width', allthumbwidth); $('.thumb_nav').hide();}
  }
}