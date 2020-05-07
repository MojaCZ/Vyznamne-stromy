import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerTreeNodeComponent } from './danger-tree-node.component';

describe('DangerTreeNodeComponent', () => {
  let component: DangerTreeNodeComponent;
  let fixture: ComponentFixture<DangerTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
