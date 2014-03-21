/* Author:

*/

var x = 0;
$(document).ready(function() {	
   
   $('.topbar-inner').delay(400).fadeIn(2500);
   $('#body').delay(400).fadeIn(2500);
   $('#container').stop().hover(function() {
      
      if(x == 0){
         $('.twitter').fadeIn(50).animate({
            'top' : '+=60px',
            'left' : '-=30px'
         }, { duration: 'slow', easing: 'easeOutElastic' });
         $('.facebook').fadeIn(100).delay(100).animate({
            'top' : '+=25px',
            'left' : '-=50px'
         }, { duration: 'slow', easing: 'easeOutElastic' });
         $('.dribbble').fadeIn(150).delay(200).animate({
            'top' : '-=25px',
            'left' : '-=50px'
         }, { duration: 'slow', easing: 'easeOutElastic' });
         $('.mail').fadeIn(200).delay(300).animate({
            'top' : '-=60px',
            'left' : '-=30px'
         }, { duration: 'slow', easing: 'easeOutElastic' });
         x = 1;
      }
      
   }, function(){});
   
   $('a').hover(function(){
      $(this).animate({
         'margin-top' : '-=3px'
      }, { duration: 'slow', easing: 'easeOutElastic' });
   }, function(){
      $(this).animate({
         'margin-top' : '+=3px'
      }, { duration: 'slow', easing: 'easeInElastic' });      
   });

});
