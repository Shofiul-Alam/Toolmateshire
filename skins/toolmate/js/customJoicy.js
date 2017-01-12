$(document).ready(function() {

    $('.table-label').click(function () {
        console.log("Entering on click");
        var classname='.'+this.className.split(' ')[1];
        if($(classname).hasClass("collapsed")){
            console.log("has Collapsed...so plus");
            $(classname+" .icon_collapsible img").attr("src","../skins/toolmate/icons/plus.svg");
        }
        else if(!$(classname).hasClass("collapsed")){
            console.log("has Collapsed...so minus");
            $(classname+ " .icon_collapsible img").attr("src","../skins/toolmate/icons/minus.svg");
        }
    });
    
    if($('.filter ul li.clearfix').hasClass("collapsed"))
    {
        $(this).closest('div').addClass("collapsed");
    }
    
    $("#value-slider").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
        $( ".value-range input[type='text'].min-value").val(ui.values[ 0 ] +" AUD");
        $( ".value-range input[type='text'].max-value").val(ui.values[ 1 ]+" AUD");
      }
    });
   $(".value-range input").keyup(function(){
       var x = 80;
       var y = 120;
       
       if(parseInt($( ".value-range input[type='text'].min-value").val())>=0) {
           x = parseInt($( ".value-range input[type='text'].min-value").val());
       }
       
      if (parseInt($( ".value-range input[type='text'].max-value").val()) ){
          y = parseInt($( ".value-range input[type='text'].max-value").val());
      }
       console.log(x);
       console.log(y);
       $("#value-slider").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ x, y ],
    });
   });
    
});