$(document).ready(function(){
   $('.scroll_button').on('click', function()
   {
       var id = $(this).data('scroll_id');
        $('html, body').animate({
            scrollTop: $("#"+id).offset().top
        }, 2000);
   });
});