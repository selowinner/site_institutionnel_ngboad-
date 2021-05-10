import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $(document).ready(function() {
      var slider = $('#programNonInst').lightSlider({
        item:2,
        slideMargin:0,
        slidePager: false,
        slideWidth:200,
        loop:false
      });

      //VIDEO DANS LES SLIDE
      var $videoSrc;  
      $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
      });
      console.log($videoSrc);
  
      // when the modal is opened autoplay it  
      $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
      });

      // stop playing the youtube video when I close the modal
      $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
      }); 
      /* $('#programNonInst').lightSlider({
          item:2,
          loop:false,
          slideMove:2,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed:600,
          responsive : [
              {
                  breakpoint:800,
                  settings: {
                      item:3,
                      slideMove:1,
                      slideMargin:6,
                    }
              },
              {
                  breakpoint:480,
                  settings: {
                      item:2,
                      slideMove:1
                    }
              }
          ]
      });   */
    });

    
    /* $('#programNonInst').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#programNonInst').removeClass('cS-hidden');
      }
    }); */
    /* $(document).ready(function(){
      var pauseInterval = false;
    
      var interval = window.setInterval(rotateSlides, 1000000) // Duration until slide changes (3sec)
    
      function rotateSlides(){
        var $firstSlide = $('#carousel').find('div:first');
    
        var width = $firstSlide.width();
    
        // Animate the first slide to move to the left the length of the
        // width. Set 1000 (1sec) to be the length of the slide transition.
        $firstSlide.animate({marginLeft: -width}, 1000, function(){
          // Reorder slides - move the $firstSlide after the last slide
          var $lastSlide = $('#carousel').find('div:last')
          $lastSlide.after($firstSlide);
    
          // Reset slide position to the end of the queue
          $firstSlide.css({marginLeft: 0})
        });
      }
    
      // Listen for click on arrows
      $('#left-arrow').click(previousSlide);
      $('#right-arrow').click(nextSlide);
      // Listen for click on slide image
      $('.slide-image').click(nextSlide);
    
      function previousSlide(){
        // Stop the interval from running
        window.clearInterval(interval);
        // Get the current slide
        var $currentSlide = $('#carousel').find('div:first');
        // Get the width of the slide so we know how much to slide by
        var width = $currentSlide.width();
        // Get the previous slide
        var $previousSlide = $('#carousel').find('div:last')
        // Move the previous slide's positition to the front of the queue
        $previousSlide.css({marginLeft: -width})
        $currentSlide.before($previousSlide);
        // Animate to the previous slide
        $previousSlide.animate({marginLeft: 0}, 1000, function(){
          // Resume the interval
          interval = window.setInterval(rotateSlides, 1000000);
        });
      }
    
      function nextSlide(){
        // Stop the interval from running
        window.clearInterval(interval);
        // Get the current slide
        var $currentSlide = $('#carousel').find('div:first');
        // Get the width of the slide so we know how much to slide by
        var width = $currentSlide.width();
        // Animate to the next slide
        $currentSlide.animate({marginLeft: -width}, 1000, function(){
          // Reorder slides - move the $firstSlide after the last slide
          var $lastSlide = $('#carousel').find('div:last')
          $lastSlide.after($currentSlide);
          // Reset slide position to the end of the queue
          $currentSlide.css({marginLeft: 0})
          // Resume the interval
          interval = window.setInterval(rotateSlides, 1000000);
        });
      }
    
    }); */
  }



openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
