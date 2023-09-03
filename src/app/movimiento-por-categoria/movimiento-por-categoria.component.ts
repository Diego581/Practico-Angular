import { Component } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientosService } from '../movimientos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movimiento-por-categoria',
  templateUrl: './movimiento-por-categoria.component.html',
  styleUrls: ['./movimiento-por-categoria.component.css']
})
export class MovimientoPorCategoriaComponent {
  movimiento: Movimiento[] = [];


  constructor(
    private movimientoService: MovimientosService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.leer(); 
  }

  leer(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria')!;
    this.movimientoService.leerMovimientosPorCategoria(categoria)
    .subscribe(movimiento => this.movimiento = movimiento);
  }
}
