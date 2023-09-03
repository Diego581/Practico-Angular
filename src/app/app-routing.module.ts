import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { MovimientoPorCategoriaComponent } from './movimiento-por-categoria/movimiento-por-categoria.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent},
  {path: 'movimientos', component: MovimientosComponent},
  {path: 'movimiento/categorias/:categoria', component: MovimientoPorCategoriaComponent},
  {path: '', redirectTo: '/movimientos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
