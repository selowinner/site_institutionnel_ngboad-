import { TestBed } from '@angular/core/testing';

import { FromDatabaseService } from './from-database.service';

describe('FromDatabaseService', () => {
  let service: FromDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
