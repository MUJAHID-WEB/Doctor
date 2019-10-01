$(document).ready(function () {
    
    
    // Default menu active
    $(".menu_content ul li").first().children().addClass("active");
    
    
    // click in the menu
    $(".menu_content ul li a").on("click", function () {
        
        
        //$(".menu ul li a").removeClass("active-menu");
        
        $(this).parent().siblings().children().removeClass("active");
        
        
        //$(this).addClass("active-menu");
        
        $(this).parent().children().addClass("active");
    });
   

});