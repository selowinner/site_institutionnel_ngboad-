import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any; 

@Component({
  selector: 'app-blog-regional',
  templateUrl: './blog-regional.component.html',
  styleUrls: ['./blog-regional.component.css']
})
export class BlogRegionalComponent implements OnInit {

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
        loop:true,
        controls:false,
        pager:false
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

    // // récupération de la liste des users
    // this.dataService.getUsers().subscribe((data: any[])=>{
    //   //console.log(data);
    //   this.users = data;
    // })

    // //récupération des articles du blog
    // this.dataService.getBlogPosts().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.posts = data;
    // })
  }



openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
