$(document).ready(function(){

    //show info on click
    $('.myInfo').on('click', function(){
        if($('#play')){
             $('.details').css("visibility","visible");
        }  
    });
    
    $(".myInfo").click (function(){
        var target = $(this).data('details');
        $('.myInfo').each(function(){
           var otherTarget = $(this).data('details');
           $(otherTarget).hide();        
        });
    
        $(target).show('slow');
    
    });

   //Turn the arrow on work page upon click
    $('.work-title').click(function(){
        $(this).next('.work-copy').slideToggle();
        $(this).next('.work-copy').css('display','inline-block');
        $(this).find('img:first').toggleClass('rotate');
        $(this).find('img:first').toggleClass('rotate-initial');
        //$('.arrow-img').toggleClass('rotate');
        //$('.arrow-img').toggleClass('rotate-initial');
        return false;
        
    }); 

    
    
});