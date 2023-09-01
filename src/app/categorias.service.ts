import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Categorias } from './categorias';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriasUrl = 'api/categorias'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient, 
    private logService: LogService,) { }

  
  leerCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.categoriasUrl)
  }

  aniadirCategoria(categoria: Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(this.categoriasUrl, categoria, this.httpOptions).pipe(
      catchError(this.handleError<Categorias>('anadir categoria')))
  }

  borrarCategoria(id: number): Observable<Categorias> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.delete<Categorias>(url, this.httpOptions).pipe(
      catchError(this.handleError<Categorias>('borrar categoria'))
    );
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
