import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { MyGigsComponent } from "./my-gigs/my-gigs.component";
import { BuyGigComponent } from "./buy-gig/buy-gig.component";
import { CreateGigComponent } from './create-gig/create-gig.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { AllGigsComponent } from './all-gigs/all-gigs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'my-gigs', component: MyGigsComponent },
  { path: 'buy-gig/:id', component: BuyGigComponent },
  { path: 'create-gig', component: CreateGigComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allGigs', component: AllGigsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
