import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSaleComponent } from './generate-sale.component';

describe('GenerateSaleComponent', () => {
  let component: GenerateSaleComponent;
  let fixture: ComponentFixture<GenerateSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
