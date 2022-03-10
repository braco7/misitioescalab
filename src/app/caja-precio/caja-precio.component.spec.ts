import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPrecioComponent } from './caja-precio.component';

describe('CajaPrecioComponent', () => {
  let component: CajaPrecioComponent;
  let fixture: ComponentFixture<CajaPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaPrecioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
