import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
    
  }

}
