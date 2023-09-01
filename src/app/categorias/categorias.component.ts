import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias';

import { CategoriasService } from '../categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  categorias: Categorias[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.leer(); 
  }

  leer(): void {
    this.categoriasService.leerCategorias()
    .subscribe(categorias => this.categorias = categorias);
  }

  aniadir(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.categoriasService.aniadirCategoria({ nombre } as Categorias)
      .subscribe(hero => {
        this.categorias.push(hero);
      });
  }
  
  borrar(categoria: Categorias): void {
    this.categorias = this.categorias.filter(c => c !== categoria);
    this.categoriasService.borrarCategoria(categoria.id).subscribe();
  }
}
