/* this is the setup for the slider plugin the core code comes from the glide.js which can be found https://github.com/jedrzejchalubek/Glide.js, this protype uses call bascks for advanced functionlity*/

function slidersetup(){
  $slideImg =  $('.slideimg');//clonses images as plugin rearranges and clones them for use
  var glide = $('.slider').glide({
    navigationCenter: false,
    navigation:'#slidenav',
    afterResize: function() {
      thubnailResize();
    },
    beforeInit: function() {
      $('.slideimg').each(function(index, el) {
      	$(this).load(function() {
      		marginfix($(this));//fixes margins for smaller images 
      	});
        
      });
    },
    afterInit: function() {
      //console.log($('.slideimg').eq(0).attr('src') + $('.slideimg').eq(2).attr('src'));
      $(".slidecount").text($slideImg.length);//displays count
      $(".slidetitle").text($slideImg.eq(0).attr('title'));//display first title caption
 
      $('.slider-nav__item').each(function(index, el) {//creates the thumbnails by cloneing images from the saved jquery array
        var thumb = $slideImg.eq(index).clone().css({
          width: '100px',
          height: '70px',
          margin:'0px',
          clear:'both'
        }).addClass('thumb');
        $(this).append(thumb);//add them to dynmaicaly create nav a tags
      });
 
      thubnailResize();//check to see how many can fit and adds nav
    },
    afterTransition: function(){//chnages the cpation and count after the lisde chnage
      var curslide = glide.current();
      var curlsideobj = $(".slideimg").eq(curslide);
      $(".slidetitle").text(curlsideobj.attr('title'));
      $(".slidenum").text(curslide);
    }
  }).data('api_glide')
 
 
  function marginfix(img){//fixs the images vertical postion
    var margintop = (img.height()/2)-img.height();
    img.css('margin-top', margintop);
  }
 
 
  function thubnailResize(){//check to see how many can fit and adds nav
    var thumbcount = $('.slider-nav__item').length;
    var thumbwidth = $('.slider-nav__item').outerWidth();
    var thumbdisplaycount = $('#navholder').innerWidth()/thumbwidth;// use math to find num of theumbs that can fit in curret nav contain
    thumbdisplaycount=Math.floor(thumbdisplaycount)-1;//this make sure room for nav by making one less than full
    var displaycountwidth = thumbwidth*thumbdisplaycount;// sets nav contain width for centering and hiding
    var allthumbwidth = thumbwidth*thumbcount;
    var steps = thumbcount-thumbdisplaycount;
    var curstep = 0;
    $('#slidenav').css('width', allthumbwidth);
    $('.thumb_nav').hide();
    if(allthumbwidth > $('#navcontainer').innerWidth()){
 
      if(thumbdisplaycount < 3){$('#navcontainer').css('display', 'none');}//if less than 3 thumbs can fit it hides the thumbs
 
      else{
        $('#navholder').css('width', displaycountwidth);
        $('.thumb_next').show();
 
        $('.thumb_prev').click(function(event) {//thumb prev nav functions
          if(curstep != 0){
            $('.thumb_prev').show();
            $('#slidenav').css('left',"+="+thumbwidth);
            curstep--;
          }
          if(curstep == 0){$('.thumb_prev').hide();}
 
          if(curstep != steps){$('.thumb_next').show();}
        });
 
        $('.thumb_next').click(function(event) {//thumb next nav functions
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
    else{$('#navholder').css('width', allthumbwidth); $('.thumb_nav').hide();}// if all thumbs can fit
  }
}