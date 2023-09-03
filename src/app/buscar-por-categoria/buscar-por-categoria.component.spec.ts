import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorCategoriaComponent } from './buscar-por-categoria.component';

describe('BuscarPorCategoriaComponent', () => {
  let component: BuscarPorCategoriaComponent;
  let fixture: ComponentFixture<BuscarPorCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPorCategoriaComponent]
    });
    fixture = TestBed.createComponent(BuscarPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
