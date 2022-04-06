import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'buy-gig-reviews',
  templateUrl: './buy-gig-reviews.component.html',
  styleUrls: ['./buy-gig-reviews.component.css']
})
export class BuyGigReviewsComponent implements OnInit {

  @Input() reviews : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
