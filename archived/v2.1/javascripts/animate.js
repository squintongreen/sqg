$(document).ready(function(){
      $('body').css({display: 'none'});
      $('body').fadeIn(1200);

      var a = $('.grid-1'),
          b = $('.grid-2'),
          c = $('.grid-3'),
          d = $('.grid-4'),
          e = $('.grid-5');

      $('.block-grid li').css({opacity: '0'});
      $(a).delay(800).fadeTo(800, 1);
      $(b).delay(1400).fadeTo(800, 1);
      $(c).delay(1000).fadeTo(800, 1);
      $(d).delay(1200).fadeTo(800, 1);
      $(e).delay(1600).fadeTo(800, 1);

      // Work Info Hover
      var info = $('.hover-info');
      var label = $('.project-name');
      var trigger = $('.block-grid li');
      $(info).hide();
      $(trigger).mouseenter(function(){
        $(this).children('.hover-info').fadeIn(300);
      }).mouseleave(function(){
        $(this).children('.hover-info').fadeOut(300);
      });

      $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);     
      });
           
      function redirectPage() {
          window.location = linkLocation;
      }

    });