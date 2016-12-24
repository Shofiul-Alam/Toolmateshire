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
});