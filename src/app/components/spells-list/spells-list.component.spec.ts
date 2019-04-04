import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsListComponent } from './spells-list.component';

describe('SpellsListComponent', () => {
  let component: SpellsListComponent;
  let fixture: ComponentFixture<SpellsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
