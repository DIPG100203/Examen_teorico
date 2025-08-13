import { TestBed } from '@angular/core/testing';

import { ServicioAsignarService } from './servicio-asignar.service';

describe('ServicioAsignarService', () => {
  let service: ServicioAsignarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAsignarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
