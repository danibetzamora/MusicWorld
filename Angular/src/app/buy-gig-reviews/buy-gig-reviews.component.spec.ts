import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGigReviewsComponent } from './buy-gig-reviews.component';

describe('BuyGigReviewsComponent', () => {
  let component: BuyGigReviewsComponent;
  let fixture: ComponentFixture<BuyGigReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGigReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGigReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
