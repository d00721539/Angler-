import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccounteditComponent } from './businessaccountedit.component';

describe('BusinessaccounteditComponent', () => {
  let component: BusinessaccounteditComponent;
  let fixture: ComponentFixture<BusinessaccounteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccounteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccounteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
