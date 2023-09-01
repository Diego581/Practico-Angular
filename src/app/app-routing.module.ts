import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  {path: 'inicio', component: CategoriasComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
