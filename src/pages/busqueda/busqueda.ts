import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { InfoPage } from '../info/info';
import { HomePage } from '../home/home';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  items: Observable<any>;
  constructor( public navCtrl: NavController,
               public _ss: SearchProvider,
               private db: AngularFireDatabase ) {
  }

  informacion( id:number ){
    
  }

  regresar(){
    
  }

  ionViewDidLoad() {
    
  }

}
