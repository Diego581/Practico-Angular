import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoPorCategoriaComponent } from './movimiento-por-categoria.component';

describe('MovimientoPorCategoriaComponent', () => {
  let component: MovimientoPorCategoriaComponent;
  let fixture: ComponentFixture<MovimientoPorCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimientoPorCategoriaComponent]
    });
    fixture = TestBed.createComponent(MovimientoPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
