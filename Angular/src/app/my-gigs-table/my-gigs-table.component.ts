import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-gigs-table',
  templateUrl: './my-gigs-table.component.html',
  styleUrls: ['./my-gigs-table.component.css']
})
export class MyGigsTableComponent implements OnInit {

  @Input() gigs : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
