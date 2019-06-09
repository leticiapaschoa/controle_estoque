import { TestBed } from '@angular/core/testing';

import { ProdutoDataService } from './produtos-data.service';

describe('ProdutosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoDataService = TestBed.get(ProdutoDataService);
    expect(service).toBeTruthy();
  });
});
