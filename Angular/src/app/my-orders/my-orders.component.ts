import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrdersComponent implements OnInit {

  orders : any[] = [];

  constructor(private http: HttpClient) {
    this.orders = [];

    this.getOrders().subscribe( data => this.orders = data );
  }

  ngOnInit(): void {}

  public getOrders(): Observable<any> {
    return this.http.get("https://623af9f6f8827fbe47ac3209.mockapi.io/orders");
  }

  filterStatus(status : any = false) {
    this.getOrders().subscribe( data => this.orders = data.filter( (item: any) => status ? item.status == status : true ) );
  }

}
