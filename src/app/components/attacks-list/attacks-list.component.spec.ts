import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksListComponent } from './attacks-list.component';

describe('AttacksListComponent', () => {
  let component: AttacksListComponent;
  let fixture: ComponentFixture<AttacksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
