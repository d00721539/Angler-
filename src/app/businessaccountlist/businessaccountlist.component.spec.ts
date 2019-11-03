import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccountlistComponent } from './businessaccountlist.component';

describe('BusinessaccountlistComponent', () => {
  let component: BusinessaccountlistComponent;
  let fixture: ComponentFixture<BusinessaccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
