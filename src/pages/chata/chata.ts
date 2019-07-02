import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/app.firebase.config';

/**
 * Generated class for the ChataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chata',
  templateUrl: 'chata.html',
})
export class ChataPage {

  private usuario: any;
  private inputText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.traerChats();
  }

  ref = firebase.database().ref('chats_a/');
  chats: {texto: string, usuario: string, hora: string, key: string }[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChataPage');
  }

  traerChats(){
    this.ref.on('value', resp => {
      this.chats = snapshotToArray(resp);
    });
  }

  doSend(){
    let newChat = this.ref.push();
    let hora_fecha = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    newChat.set({texto: this.inputText, usuario: this.usuario.correo, hora: hora_fecha});
    this.inputText = "";
  }

}
