import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGigsTableComponent } from './my-gigs-table.component';

describe('MyGigsTableComponent', () => {
  let component: MyGigsTableComponent;
  let fixture: ComponentFixture<MyGigsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGigsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGigsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
