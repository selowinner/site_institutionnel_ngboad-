import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-blog-pays',
  templateUrl: './blog-pays.component.html',
  styleUrls: ['./blog-pays.component.css']
})
export class BlogPaysComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $(document).ready(function() {
      $('#prNotInst').lightSlider({
        item:1,
        slideMargin:0,
        slidePager: false,
        slideWidth:200,
        loop:true,
        controls:false,
        pager:false
      });

      var slider = $('#programNonInst').lightSlider({
        item:2,
        slideMargin:0,
        slideWidth:200,
        loop:false,
        controls:false,
        pager:false
      });

      //Prev
      $('#goToPrevSlide').click(function(){
        slider.goToPrevSlide(); 
      });

      $('#goToPrevSlide1').click(function(){
        slider.goToPrevSlide(); 
      });

      $('#goToPrevSlide2').click(function(){
        slider.goToPrevSlide(); 
      });

      $('#goToPrevSlide3').click(function(){
        slider.goToPrevSlide(); 
      });

      $('#goToPrevSlide4').click(function(){
        slider.goToPrevSlide(); 
      });

      $('#goToPrevSlide5').click(function(){
        slider.goToPrevSlide(); 
      });


      //Next
      $('#goToNextSlide').click(function(){
        slider.goToNextSlide(); 
      });

      $('#goToNextSlide1').click(function(){
        slider.goToNextSlide(); 
      });

      $('#goToNextSlide2').click(function(){
        slider.goToNextSlide(); 
      });

      $('#goToNextSlide3').click(function(){
        slider.goToNextSlide(); 
      });

      $('#goToNextSlide4').click(function(){
        slider.goToNextSlide(); 
      });

      $('#goToNextSlide5').click(function(){
        slider.goToNextSlide(); 
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
    });
  }



openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}

}
