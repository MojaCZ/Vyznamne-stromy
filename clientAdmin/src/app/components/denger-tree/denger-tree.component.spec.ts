import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DengerTreeComponent } from './denger-tree.component';

describe('DengerTreeComponent', () => {
  let component: DengerTreeComponent;
  let fixture: ComponentFixture<DengerTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DengerTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DengerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
