import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias';
import { Movimiento } from '../movimiento';
import { MovimientosService } from '../movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  movimiento: Movimiento[] = [];


  constructor(private movimientoService: MovimientosService) { }

  ngOnInit(): void {
    this.leer(); 
  }

  leer(): void {
    this.movimientoService.leerMovimientos()
    .subscribe(movimiento => this.movimiento = movimiento);
  }

}
