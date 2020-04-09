import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationSectionComponent } from './classification-section.component';

describe('ClassificationSectionComponent', () => {
  let component: ClassificationSectionComponent;
  let fixture: ComponentFixture<ClassificationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
