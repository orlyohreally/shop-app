import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProductViewComponent } from './customer-product-view.component';

describe('CustomerProductManagerComponent', () => {
  let component: CustomerProductViewComponent;
  let fixture: ComponentFixture<CustomerProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProductViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
