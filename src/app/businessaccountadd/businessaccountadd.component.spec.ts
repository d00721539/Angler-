import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccountaddComponent } from './businessaccountadd.component';

describe('BusinessaccountaddComponent', () => {
  let component: BusinessaccountaddComponent;
  let fixture: ComponentFixture<BusinessaccountaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccountaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccountaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
