import { Component } from '@angular/core';
import { SearchProvider } from '../../providers/search/search';
import { NavController } from 'ionic-angular';
import { BusquedaPage } from '../busqueda/busqueda';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor( public _ss: SearchProvider,
               public navCtrl: NavController) {
  }
  regresar(){
    this._ss.analisis = [];
    this.navCtrl.setRoot(BusquedaPage);
  }

  ionViewDidLoad() {
  }

}
