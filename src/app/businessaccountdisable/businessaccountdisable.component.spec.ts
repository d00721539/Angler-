import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccountdisableComponent } from './businessaccountdisable.component';

describe('BusinessaccountdisableComponent', () => {
  let component: BusinessaccountdisableComponent;
  let fixture: ComponentFixture<BusinessaccountdisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccountdisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccountdisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
