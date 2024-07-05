import { Component } from '@angular/core';
import { GuitarStoreService } from '../guitar-store.service';
import { IGuitarra } from '../../interfaces/guitarra';
import { ICategoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  listaGuitarras: IGuitarra[] = [];
  listaCategorias : ICategoria[] = []
  listaGuitarrasOriginal: IGuitarra[] = [];
  isResultLoaded = false;
  categoriaSeleccionada: number | null = null;
  textoBusqueda: string = '';

  constructor( private _guitarService : GuitarStoreService ) {
    this.obtenerGuitarras();
    this.obtenerCategorias()
  }

  obtenerGuitarras()
  {
    this._guitarService.getListGuitar().subscribe({
      next:(data) => {
        console.log(data)
        this.listaGuitarras = data;
        this.listaGuitarrasOriginal = data; 
        this.isResultLoaded = true;
      }, error:(e) => ( console.log(e) )
    })
  }

  obtenerCategorias()
  {
    this._guitarService.getCategories().subscribe({
      next:(data) => {
        console.log(data)
        this.listaCategorias = data;
        this.isResultLoaded = true;
      }, error:(e) => ( console.log(e) )
    })
  }

  filtrarPorCategoria(categoriaId: number): void {
    if (categoriaId === this.categoriaSeleccionada) {
      // Si se hace clic en la misma categoría, no hacemos nada
      return;
    }

    this.categoriaSeleccionada = categoriaId;

    if (categoriaId === 0) {
      // Mostrar todas las guitarras si se selecciona la categoría 0 (por ejemplo, "Todas las categorías")
      this.listaGuitarras = this.listaGuitarrasOriginal;  // Restaurar la lista original
    } else {
      // Filtrar las guitarras por categoría seleccionada
      this.listaGuitarras = this.listaGuitarrasOriginal.filter(guitarra => guitarra.idCategoria === categoriaId);
    }
  }

  buscarGuitarras(): void {
    // Filtrar las guitarras según el texto de búsqueda
    if (this.textoBusqueda.trim() !== '') {
      this.listaGuitarras = this.listaGuitarrasOriginal.filter(guitarra =>
        guitarra.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
    } else {
      // Si el campo de búsqueda está vacío, mostrar todas las guitarras
      this.listaGuitarras = this.listaGuitarrasOriginal;
    }
  }
}
