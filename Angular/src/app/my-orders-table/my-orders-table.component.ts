import {Component, Input, OnInit} from '@angular/core';
import Timestamp from "../Timestamp";

@Component({
  selector: 'my-orders-table',
  templateUrl: './my-orders-table.component.html',
  styleUrls: ['./my-orders-table.component.css']
})
export class MyOrdersTableComponent implements OnInit {

  @Input() orders : any[] = [];

  constructor() { }

  ngOnInit(): void { }

  public Timestamp(){
    return Timestamp;
  }

}
