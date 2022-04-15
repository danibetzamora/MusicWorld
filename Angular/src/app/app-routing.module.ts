import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { MyGigsComponent } from "./my-gigs/my-gigs.component";
import { BuyGigComponent } from "./buy-gig/buy-gig.component";
import { CreateGigComponent } from './create-gig/create-gig.component';

const routes: Routes = [
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'my-gigs', component: MyGigsComponent },
  { path: 'buy-gig', component: BuyGigComponent },
  { path: 'create-gig', component: CreateGigComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
