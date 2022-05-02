import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from "../order.model";
import { OrderService } from "../order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(){
    this.orderService.getList().subscribe(
      (res: any) => this.orders = res as Order[]
    );
  }

  filterStatus(status : any = false) {
    this.orderService.getList().subscribe(
      (res: any) => this.orders = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ).filter(
        (item: any) => status ? item.status == status : true
      ) as Order[]
    );
  }

}
