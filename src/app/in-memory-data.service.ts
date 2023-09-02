import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categorias } from './categorias';

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
    return {categorias};
  }}