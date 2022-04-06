import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGigContactFormComponent } from './buy-gig-contact-form.component';

describe('BuyGigContactFormComponent', () => {
  let component: BuyGigContactFormComponent;
  let fixture: ComponentFixture<BuyGigContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGigContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGigContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
