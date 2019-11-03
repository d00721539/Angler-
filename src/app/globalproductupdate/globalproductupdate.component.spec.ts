import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalproductupdateComponent } from './globalproductupdate.component';

describe('GlobalproductupdateComponent', () => {
  let component: GlobalproductupdateComponent;
  let fixture: ComponentFixture<GlobalproductupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalproductupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalproductupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
