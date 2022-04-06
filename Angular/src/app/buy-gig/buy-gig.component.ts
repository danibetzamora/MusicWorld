import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-buy-gig',
  templateUrl: './buy-gig.component.html',
  styleUrls: ['./buy-gig.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuyGigComponent implements OnInit {

  gig : any;
  recommended : any[] = [];
  reviews : any[] = [];

  constructor(private http: HttpClient) {
    this.getGig().subscribe( data => this.gig = data[0] );
    this.getRecommended().subscribe( data => this.recommended = data.slice(0, 2) );
    this.getReviews().subscribe( data => this.reviews = data );
  }

  ngOnInit(): void {}

  public getGig(): Observable<any> {
    return this.http.get("https://623af9f6f8827fbe47ac3209.mockapi.io/gig");
  }

  public getReviews(): Observable<any> {
    return this.http.get("https://623af9f6f8827fbe47ac3209.mockapi.io/reviews");
  }

  public getRecommended(): Observable<any> {
    return this.http.get("https://623af9f6f8827fbe47ac3209.mockapi.io/gigs");
  }

}
