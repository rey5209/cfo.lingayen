
$(document).ready(function() {
    $('.thanks-note').hide();
    $('.instruction-note').hide();

$('.btn-event').click(function() {
    
    window.open("https://youtu.be/Tk8Zl9c49XM", "_blank"); 
    $('.main-event').hide(); 
    $('.instruction-note').show();

    setInterval(function()
    { 
        $('.instruction-note').hide();
        $('.thanks-note').show();
        // alert("Hello"); 

    }, 60000); 
        // 1sec = 1000
        // 1min = 60000
        // 60 min = 600000  
  });
  
});