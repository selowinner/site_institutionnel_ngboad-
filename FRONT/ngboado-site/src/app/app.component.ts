import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngboado-site';

  public ngOnInit(): void {
    $(document).ready(function () {
      "use strict";

      // here all ready functions
      loader();
    });

    /* ===============================================
      1. PRELOADER
    =============================================== */
    function loader() {
      "use strict";
      setTimeout(function () {
          $('#loader-wrapper').fadeOut();
      }, 5500);
    };
  }
}
