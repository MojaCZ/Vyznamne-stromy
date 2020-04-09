import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationBtnGroupComponent } from './classification-btn-group.component';

describe('ClassificationBtnGroupComponent', () => {
  let component: ClassificationBtnGroupComponent;
  let fixture: ComponentFixture<ClassificationBtnGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationBtnGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
