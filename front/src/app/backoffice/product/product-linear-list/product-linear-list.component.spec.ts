import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLinearListComponent } from './product-linear-list.component';

describe('ProductsLinearListComponent', () => {
  let component: ProductLinearListComponent;
  let fixture: ComponentFixture<ProductLinearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLinearListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLinearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
