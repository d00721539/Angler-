import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductglobalComponent } from './productglobal.component';

describe('ProductglobalComponent', () => {
  let component: ProductglobalComponent;
  let fixture: ComponentFixture<ProductglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
