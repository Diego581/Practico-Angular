import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BuscarPorCategoriaComponent } from './buscar-por-categoria/buscar-por-categoria.component';
import { MovimientoPorCategoriaComponent } from './movimiento-por-categoria/movimiento-por-categoria.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    CategoriasComponent,
    MovimientosComponent,
    BuscarPorCategoriaComponent,
    MovimientoPorCategoriaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
