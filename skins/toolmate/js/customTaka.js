//@@@@@@@@@ index.html @@@@@@@@@//

//*****************************//
//*  For How it works section *//
//*****************************//
  
  $(document).ready(function() {
    var item_featured = $('#featured_product > li'); //Cache your DOM selector
   
        var item_featured_length = item_featured.length;
         var row2 = item_featured_length / 2;
         var row1 = item_featured_length - row2;
         console.log("row1 " + row1);
         console.log("row2 " + row2);
         console.log($("#featured_product > li:nth-child(6)").attr('class'));
        //$("#featured_product > li:nth-child(1)").before("<ul class='products-grid grid-list featured'"+">");
         
         
      

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
        // var item_featured = $('#featured_product li'); //Cache your DOM selector
        // var item_featured_length = item_featured.length;
        // alert(item_featured_length);
        // $('#featured_product').css("column-count", 4);
          
      }
    });
    
    $('#arrowL_featured').click(function(){
      if(index_featured > 0){
         index_featured--;
         $item_featured.animate({'left':'+=1182px'});
      }
    });
    
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

//@@@@@@@@@ ProductPage.html @@@@@@@@@//

//***********************************//
//*              rating             *//
//***********************************//
   
   // $('.star-single img').click(function(){
   //    alert("it's clicked");
   // });
   
//@@@@@@@@@ ToolList.html @@@@@@@@@//

      // $('h3').toggle(
      //  function() {
      //     alert('hello');
      //     $(this).children('.fa.fa-chevron-down').attr('src', '../skins/toolmate/images/icons/icon_day.svg');
      //  },
      //  function() {
      //     $(this).children('.fa.fa-chevron-down').attr('src', '../skins/toolmate/images/icons/booking-cash.svg');
      //  }
      // );

    // $(document).ready(function() {
    //     var item_featured = $('#featured_product li'); //Cache your DOM selector
    //     var item_featured_length = item_featured.length;
    //     alert(item_featured_length);
    //     $('#featured_product').css("column-count", 4);
    // });
     
  });
