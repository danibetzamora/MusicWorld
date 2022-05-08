import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gig } from "../services/gig.model";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { GigService} from "../services/gig.service";
import { Review} from "../services/review.model";
import { ReviewService } from "../services/review.service";

@Component({
  selector: 'app-buy-gig',
  templateUrl: './buy-gig.component.html',
  styleUrls: ['./buy-gig.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuyGigComponent implements OnInit {

  id: string = '';
  gig: Gig = new Gig;
  recommended: Gig[] = [];
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private gigService: GigService,
    private reviewService: ReviewService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getGig();
      this.getRecommended();
      this.getReviews();
    });
  }

  public getGig() {
    this.gigService.getDocument(this.id).subscribe(
      (res: any) => this.gig = ({...res.data(), 'id': res.id}) as Gig
    );
  }

  public getRecommended() {
    this.gigService.getList().subscribe(
      (res: any) => this.recommended = res.map(
        (item: any) => ({...item.data(), 'id': item.id})
      ).slice(0, 2) as Gig[]
    );
  }

  public getReviews() {
    this.reviewService.getList().subscribe(
      (res: any) => this.reviews = res.map(
        (item: any) => ({...item.data(), 'id': item.id})
      ) as Review[]
    );
  }

}
