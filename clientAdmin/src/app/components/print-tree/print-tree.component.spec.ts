import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTreeComponent } from './print-tree.component';

describe('PrintTreeComponent', () => {
  let component: PrintTreeComponent;
  let fixture: ComponentFixture<PrintTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
