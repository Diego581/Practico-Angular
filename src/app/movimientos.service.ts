import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LogService } from './log.service';
import { Movimiento } from './movimiento';

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

  aniadirMovimientos(movimiento: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.movimientosUrl, movimiento, this.httpOptions).pipe(
      catchError(this.handleError<Movimiento>('anadir categoria')))
  }

  // Sacado de Tour of Heroes
  private handleError<T>(operation = 'operacion', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} fallo: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.logService.log(`categoriasService: ${message}`);
  }
}
