import { getLocaleDateFormat } from '@angular/common';
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
    const movimiento = [
      {id: 1,  nombre: 'Ingreso', detalle: 'Cobro de sueldo', precio:'$300000', categoria:'1', fecha : ''},
      {id: 2,  nombre: 'Egreso', detalle: 'Pago de cuotas', precio:'$10', categoria:'3', fecha : ''},
      {id: 3,  nombre: 'Ingreso', detalle: 'Venta', precio:'$20', categoria:'2', fecha : ''},
    ] 
    return {categorias, movimiento};
  }}