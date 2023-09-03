import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categorias } from './categorias';
import { Movimiento } from './movimiento';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categorias = [
      {id: 1,  nombre: 'varios', descripcion: 'Otro motivo...'},
      {id: 2,  nombre: 'prestamos', descripcion: 'Ingreso de dinero por un prestamo'},
      {id: 3,  nombre: 'facturas', descripcion: 'Pago de facturas'},
      ];
    const movimientos = [
      {id: 1,  nombre: 'Ingreso', detalle: 'Cobro de sueldo', precio:'$300000', categoria:'varios', fecha : ''},
      {id: 2,  nombre: 'Egreso', detalle: 'Pago de cuotas', precio:'$10', categoria:'facturas', fecha : ''},
      {id: 3,  nombre: 'Ingreso', detalle: 'Venta', precio:'$20', categoria:'prestamos', fecha : ''},
    ] 
    return {categorias, movimientos};  
  }
  genId(categorias: Categorias[]): number {
    return categorias.length > 0 ? Math.max(...categorias.map(categoria => categoria.id)) + 1 : 11;
  }
  genId2(movimiento: Movimiento[]): number {
    return movimiento.length > 0 ? Math.max(...movimiento.map(movimiento => movimiento.id)) + 1 : 11;
  }
}