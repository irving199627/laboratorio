import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SearchProvider {
  item: Observable<any>;
  encontrado: boolean;
  busqueda = false;
  estudio: string;
  area: string;
  muestra: string;
  entrega: string;
  termino;
  analisis: any[] = [];
  analisis_filtrados = [];
  vacio: boolean;

  constructor( private db: AngularFireDatabase ) {
    
  }
}
