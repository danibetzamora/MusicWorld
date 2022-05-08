import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'buy-gig-recommended',
  templateUrl: './buy-gig-recommended.component.html'
})
export class BuyGigRecommendedComponent implements OnInit {

  @Input() recommended : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
