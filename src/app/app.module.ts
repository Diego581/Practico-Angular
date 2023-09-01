import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    MovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
