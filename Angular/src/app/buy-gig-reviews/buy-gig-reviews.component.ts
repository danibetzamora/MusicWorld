import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'buy-gig-reviews',
  templateUrl: './buy-gig-reviews.component.html'
})
export class BuyGigReviewsComponent implements OnInit {

  @Input() reviews : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
