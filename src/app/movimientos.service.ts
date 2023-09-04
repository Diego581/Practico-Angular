import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LogService } from './log.service';
import { Movimiento } from './movimiento';
import { Categorias } from './categorias';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  private movimientosUrl = 'api/movimientos'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient,
    private logService: LogService) { }


  leerMovimientos(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(this.movimientosUrl)
  }

  leerMovimientosPorCategoria(categoria: string): Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(this.movimientosUrl).pipe(
      map((movimientos: Movimiento[]) => {
        // Filtrar los movimientos por categoría
        return movimientos.filter(movimiento => movimiento.categoria === categoria);
      })
      );
    }

  aniadirMovimientos(movimiento: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.movimientosUrl, movimiento, this.httpOptions).pipe(
      catchError(this.handleError<Movimiento>('añadir movimiento')))
  }

  searchCategoria(term: string): Observable<Movimiento[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Movimiento[]>(`${this.movimientosUrl}/?categoria=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found categories matching "${term}"`) :
         this.log(`no categories matching "${term}"`)),
      catchError(this.handleError<Movimiento[]>('searchCategorias', []))
    );
  }


  // Sacado de Tour of Heroes
  private handleError<T>(operation = 'operacion', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} fallo: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.logService.log(`movimientosService: ${message}`);
  }
}
