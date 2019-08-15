import { TestBed } from '@angular/core/testing';

import { BooksCategoryService } from './books-category.service';

describe('BooksCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksCategoryService = TestBed.get(BooksCategoryService);
    expect(service).toBeTruthy();
  });
});
