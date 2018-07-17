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

  bus( cod: string ) {
    this.termino = cod.toUpperCase();
    this.analisis_filtrados = [];
      this.analisis.forEach( an => {
        if ( an.estudio.indexOf( this.termino ) >= 0 ) {
          this.analisis_filtrados.push(an);
        }
        if ( this.analisis_filtrados.length === 0 ) {
          this.vacio = true;
        } else {
          this.vacio = false;
        }
      });
  }

  cargar () {
    const promesa = new Promise( (resolve, reject ) => {
      this.item = this.db.object('analisis').valueChanges();
        this.item.forEach( datos => {
            this.analisis = datos;
            resolve();
        });
    });
    return promesa;
  }
}
