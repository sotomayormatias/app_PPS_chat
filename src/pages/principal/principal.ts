import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewWillLoad() {
    if (sessionStorage.getItem('usuario')) {
      this.toastCtrl.create({
        message: 'Bienvenido a Chateaula, ' + JSON.parse(sessionStorage.getItem('usuario')).correo,
        duration: 3000,
        position: 'top'
      }).present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  chatA(){
    this.navCtrl.push('ChataPage');
  }

  chatB(){
    this.navCtrl.push('ChatbPage');
  }
}
