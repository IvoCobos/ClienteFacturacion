import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNoteComponent } from './sales-note.component';

describe('SalesNoteComponent', () => {
  let component: SalesNoteComponent;
  let fixture: ComponentFixture<SalesNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
