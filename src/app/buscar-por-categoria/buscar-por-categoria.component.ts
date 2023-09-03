import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movimiento } from '../movimiento';
import { MovimientosService } from '../movimientos.service';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'; 


@Component({
  selector: 'app-buscar-por-categoria',
  templateUrl: './buscar-por-categoria.component.html',
  styleUrls: ['./buscar-por-categoria.component.css']
})
export class BuscarPorCategoriaComponent implements OnInit {

  movimientos$!: Observable<Movimiento[]>;
  private searchTerms = new Subject<string>()
  constructor(private movimientosService: MovimientosService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.movimientos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movimientosService.searchCategoria(term)),
    );
  }

}
