import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { medGuard } from './med.guard';

describe('medGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => medGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
