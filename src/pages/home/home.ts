import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BusquedaPage } from '../busqueda/busqueda';
import { FormGroup } from '@angular/forms';
import { SearchProvider } from '../../providers/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  termino;
  forma: FormGroup;

  constructor( public navCtrl: NavController,
               public _ss: SearchProvider,
               public loadingCtrl: LoadingController ) {
    
  }
  buscar(termino: string){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Buscando, por favor espere'
    });
    loading.present();
      if (this._ss.analisis.length === 0) {
        this._ss.cargar().then( () => {
          this._ss.bus(termino);
          loading.dismiss();
          this.navCtrl.setRoot(BusquedaPage);
        }).catch( err => {
          console.log(err);
        });
      } else {
        this._ss.bus(termino);
      }
  }

}
