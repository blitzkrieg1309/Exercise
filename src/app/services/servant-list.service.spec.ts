import { TestBed } from '@angular/core/testing';

import { ServantListService } from './servant-list.service';

describe('ServantListService', () => {
  let service: ServantListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServantListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
