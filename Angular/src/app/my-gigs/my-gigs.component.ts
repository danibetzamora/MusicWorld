import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gig } from "../services/gig.model";
import { GigService } from "../services/gig.service";
import { ReviewService } from "../services/review.service";

@Component({
  selector: 'app-my-gigs',
  templateUrl: './my-gigs.component.html',
  styleUrls: ['./my-gigs.component.css', '../buy-gig/buy-gig.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyGigsComponent implements OnInit {

  gigs: Gig[] = [];

  constructor(
    private gigService: GigService,
    private reviewService: ReviewService,
  ) {}

  ngOnInit(): void {
    this.getGigs();
  }

  public getGigs(){
    this.gigService.getList().subscribe(
      (res: any) => this.gigs = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ).filter(
        (item: any) => item.my_gig == true
      )as Gig[] 
    );
  }

  filterStatus(status : any = false) {
    this.gigService.getList().subscribe(
      (res: any) => this.gigs = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ).filter(
        (item: any) => status ? item.status == status : true
      ) as Gig[]
    );
  }

}
