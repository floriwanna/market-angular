import { TestBed } from '@angular/core/testing';

import { ProductBackService } from './product-back.service';

describe('ProductService', () => {
  let service: ProductBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
