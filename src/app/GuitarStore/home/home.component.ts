import { Component } from '@angular/core';
import { IGuitarra } from '../../interfaces/guitarra';
import { GuitarStoreService } from '../guitar-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaGuitarras : IGuitarra[] = []
  isResultLoaded : boolean = false

  constructor( private _guitarraService : GuitarStoreService ){
    this.obtenerGuitarrasPrincipales();
  }

  obtenerGuitarrasPrincipales()
  {
    this._guitarraService.getRandomGuitar().subscribe({
      next:(data) => {
        console.log(data)
        this.listaGuitarras = data;
        this.isResultLoaded = true;
      }, error:(e) => ( console.log(e) )
    })
  }

}
