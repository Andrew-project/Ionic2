import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the Loading page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  loading() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });

    loader.onDidDismiss(() => {
      console.log('Dismissed loading!!!');
    });

    loader.present();

    setTimeout(function () {
      loader.dismiss();
    }, 5000)
  }
}
