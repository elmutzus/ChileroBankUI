import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCreateComponent } from './cuenta-create.component';

describe('CuentaCreateComponent', () => {
  let component: CuentaCreateComponent;
  let fixture: ComponentFixture<CuentaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
