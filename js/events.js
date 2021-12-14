
$(document).ready(function() {
    $('.thanks-note').hide();
    $('.instruction-note').hide();

    var link ='https://youtu.be/6AeAwSqHFVI?t=1';
    $('.main-event').append('<a  id="hidden-link" href="'+link+'" target="_blank"></a>'); 
     
$('.post-btn').click(function() {
    
    // window.open("https://youtu.be/Tk8Zl9c49XM", "_blank"); 
    $('.main-event').hide(); 
    $('.instruction-note').show(); 
    
    $( "#hidden-link" ).trigger( "click" );
    document.getElementById('hidden-link').click();

    setInterval(function()
    { 
        $('.instruction-note').hide();
        $('.thanks-note').show();
        // alert("Hello"); 

    }, 60000 ); 
        // 1sec = 1000
        // 7sec = 5500
        // 15sec = 15000
        // 1min = 60000
        // 10 min = 600000
  });
  
});
