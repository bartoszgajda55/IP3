import { TestBed } from '@angular/core/testing';

import { EarthquakeService } from './earthquake.service';
import {HttpClientModule} from '@angular/common/http';

describe('EarthquakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: EarthquakeService = TestBed.get(EarthquakeService);
    expect(service).toBeTruthy();
  });
});
