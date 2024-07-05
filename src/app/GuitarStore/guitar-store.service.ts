import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGuitarra } from '../interfaces/guitarra';
import { ICategoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class GuitarStoreService {

  //Variables para almacenar los endpoints
  private _endpoint : string = environment.endPoint;
  private _apiUrl :  string = this._endpoint + "/Guitarras";

  //inicializar el http
  constructor( private http : HttpClient ) { }

  //Metodo paara obtener las guitarras más populares
  getRandomGuitar() : Observable<IGuitarra[]>{
    return this.http.get<IGuitarra[]>(`${this._apiUrl}/GuitarrasPrincipales`)
  }

  getListGuitar() : Observable<IGuitarra[]>{
    return this.http.get<IGuitarra[]>(`${this._apiUrl}/ListaGuitarras`);
  }


  getCategories() : Observable<ICategoria[]>{
    return this.http.get<ICategoria[]>(`${this._endpoint}/Categorias/ListaCategorias`);
  }
}
