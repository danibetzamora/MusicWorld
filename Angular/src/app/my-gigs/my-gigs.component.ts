import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-my-gigs',
  templateUrl: './my-gigs.component.html',
  styleUrls: ['./my-gigs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyGigsComponent implements OnInit {

  gigs : any[];

  constructor(private http: HttpClient) {
    this.gigs = [];

    this.getGigs().subscribe( data => this.gigs = data );
  }

  ngOnInit(): void { }

  public getGigs(): Observable<any> {
    return this.http.get("https://623af9f6f8827fbe47ac3209.mockapi.io/gigs");
  }

  filterStatus(status : any = false) {
    this.getGigs().subscribe( data => this.gigs = data.filter( (item: any) => status ? item.status == status : true ) );
  }

}
