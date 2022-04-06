import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGigComponent } from './buy-gig.component';

describe('BuyGigComponent', () => {
  let component: BuyGigComponent;
  let fixture: ComponentFixture<BuyGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
