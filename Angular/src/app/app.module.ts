import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyGigsComponent } from './my-gigs/my-gigs.component';
import { BuyGigComponent } from './buy-gig/buy-gig.component';
import { MyOrdersTableComponent } from './my-orders-table/my-orders-table.component';
import { MyGigsTableComponent } from './my-gigs-table/my-gigs-table.component';
import { BuyGigRecommendedComponent } from './buy-gig-recommended/buy-gig-recommended.component';
import { BuyGigReviewsComponent } from './buy-gig-reviews/buy-gig-reviews.component';
import { FooterComponent } from './footer/footer.component';
import { BuyGigContactFormComponent } from './buy-gig-contact-form/buy-gig-contact-form.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MyOrdersComponent,
    MyGigsComponent,
    BuyGigComponent,
    MyOrdersTableComponent,
    MyGigsTableComponent,
    BuyGigRecommendedComponent,
    BuyGigReviewsComponent,
    FooterComponent,
    BuyGigContactFormComponent,
    CreateGigComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
