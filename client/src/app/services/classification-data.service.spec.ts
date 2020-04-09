import { TestBed } from '@angular/core/testing';

import { ClassificationDataService } from './classification-data.service';

describe('ClassificationDataService', () => {
  let service: ClassificationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
