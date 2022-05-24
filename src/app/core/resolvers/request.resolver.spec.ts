import { TestBed } from '@angular/core/testing';

import { RequestResolver } from './request.resolver';

describe('RequestResolver', () => {
  let resolver: RequestResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RequestResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
