import { TestBed } from '@angular/core/testing';

import { AuChoixService } from './au-choix.service';

describe('AuChoixService', () => {
  let service: AuChoixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuChoixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
