//*****************************//
//*  For How it works section *//
//*****************************//
  
  $(document).ready(function() {
     
     $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        var sibling_src_off = $(this).siblings('a.active').children("h4").children('img').attr('src');
        var sibling_src_off_length = (sibling_src_off.length - 7);
        var origin = sibling_src_off.substring(0, sibling_src_off_length) + "_off.svg";
        var src_off = $(this).children("h4").children('img').attr('src');
        var src_on = src_off.replace('_off','_on');
        $(this).siblings('a.active').children("h4").children('img').attr('src',origin);
        $(this).addClass("active");
        $(this).siblings('a.active').removeClass("active");
        $(this).children('h4').addClass("activeBg");
        $(this).siblings('a').children('h4.activeBg').removeClass("activeBg");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        if((src_off.indexOf('active')) == -1) {
             $(this).children("h4").children("img").attr('src',src_on);
        }
     }),

//*****************************//
//*    For Navigation bar     *//
//*****************************//
    
    $('ul.dropdown-tools>li').hover(function(){
        var imgsrc = $(this).children("a").children("span").children('img').attr('src');
        $(this).children("a").children("span").children('img').attr('src', imgsrc.replace('_off', '_on'));
        $(this).children("a").children('img').attr('src','../skins/toolmate/images/icons/icon_Layer 22_on.svg');
        $(this).children("a").children("span").css("background-color",'#cf4428');
    }, function(){
         var imgsrc = $(this).children("a").children("span").children('img').attr('src');   
         $(this).children("a").children("span").children('img').attr('src', imgsrc.replace('_on', '_off'));
         $(this).children("a").children('img').attr('src','../skins/toolmate/images/icons/icon_Layer 22_off.svg');
         $(this).children("a").children("span").css("background-color",'#fff');
    });
   
//***********************************//
//* For Featured and latest section *//
//***********************************//
   
    var $item_latest = $('#latest .product-cell'); //Cache your DOM selector
    var $item_featured = $('.featured .product-cell'); //Cache your DOM selector
    var visible_featured = 8,
    index_featured = 0;
    endIndexFeatured = ( $item_featured.length / visible_featured ) - 1;

    var visible_latest = 6,
    index_latest = 0,
    endIndexLatest = ( $item_latest.length / visible_latest ) - 1;

    $('#arrowR').click(function(){
      if(index_latest < endIndexLatest ){
         index_latest++;
         $item_latest.animate({'left':'-=1182px'});
      }
    });
    
    $('#arrowL').click(function(){
      if(index_latest > 0){
         index_latest--;            
         $item_latest.animate({'left':'+=1182px'});
      }
    });
    
    $('#arrowR_featured').click(function(){
      if(index_featured < endIndexFeatured ){
         index_featured++;
         $item_featured.animate({'left':'-=1182px'});
      }
    });
    
    $('#arrowL_featured').click(function(){
      if(index_featured > 0){
         index_featured--;
         $item_featured.animate({'left':'+=1182px'});
      }
    });
    
    
//***********************************//
//* For Featured and latest section *//
//***********************************//
   
    $('.scrollDown > a ').click(function(){
         event.preventDefault();
         $('.products-image').animate({
            scrollTop: '+=400'
       });
    });
    
    $('.scrollUp > a ').click(function(){
       event.preventDefault();
        $('.products-image').animate({
            scrollTop: '-=400'
       });
    });

//***********************************//
//*           Registration          *//
//***********************************//

    $('#example-progress-bar').strengthMeter('progressBar', {
        container: $('#example-progress-bar-container')
    });
    $('#registerTrigger').click(function() {
       $('.affix').css('position','initial');
    });
    $('.close').click(function() {
       $('.affix').css('position','fixed');
    });
    
});
   

