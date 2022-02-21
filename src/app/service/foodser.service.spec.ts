import { TestBed } from '@angular/core/testing';

import { FoodserService } from './foodser.service';

describe('FoodserService', () => {
  let service: FoodserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
