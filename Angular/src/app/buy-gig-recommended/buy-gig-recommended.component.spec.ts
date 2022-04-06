import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGigRecommendedComponent } from './buy-gig-recommended.component';

describe('BuyGigRecommendedComponent', () => {
  let component: BuyGigRecommendedComponent;
  let fixture: ComponentFixture<BuyGigRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGigRecommendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGigRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
