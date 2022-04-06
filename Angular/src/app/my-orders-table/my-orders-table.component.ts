import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-orders-table',
  templateUrl: './my-orders-table.component.html',
  styleUrls: ['./my-orders-table.component.css']
})
export class MyOrdersTableComponent implements OnInit {

  @Input() orders : any[] = [];

  constructor() { }

  ngOnInit(): void { }

}
