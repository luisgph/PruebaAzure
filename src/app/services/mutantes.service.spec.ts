import { TestBed, inject } from '@angular/core/testing';

import { MutantesService } from './mutantes.service';

describe('MutantesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutantesService]
    });
  });

  it('should be created', inject([MutantesService], (service: MutantesService) => {
    expect(service).toBeTruthy();
  }));
});
