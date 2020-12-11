import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-view',
  templateUrl: './temp-view.page.html',
  styleUrls: ['./temp-view.page.scss'],
})
export class TempViewPage implements OnInit {

  constructor() { }
  slidesOptions = {
    slidesPerView: 1.5,
    spacebetween: 5 
  }


  ngOnInit() {
  }

}
