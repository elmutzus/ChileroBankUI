import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionIndexComponent } from './transaccion-index.component';

describe('TransaccionIndexComponent', () => {
  let component: TransaccionIndexComponent;
  let fixture: ComponentFixture<TransaccionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
