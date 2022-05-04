import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gig } from "../gig.model";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { GigService} from "../gig.service";

@Component({
  selector: 'app-all-gigs',
  templateUrl: './all-gigs.component.html',
  styleUrls: ['./all-gigs.component.css']
})
export class AllGigsComponent implements OnInit {

  gigs: Gig[] = [];

  constructor(
    private gigService: GigService,
  ) { }

  ngOnInit(): void {
    this.getGigs();
  }

  public getGigs(){
    this.gigService.getList().subscribe(
      (res: any) => this.gigs = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Gig[]
    );
  }
/*
  public getGigs() {
    this.gigService.getList().subscribe(
      (res: any) => this.gigs = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ).filter(
        (item: any) => item.clicks == undefined
      )as Gig[]
    );
  }
*/
}
