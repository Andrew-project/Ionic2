import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector: 'page-card',
    templateUrl: 'card.html'
})
export class CardPage {

    constructor(private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardPage');
    }

    onAddToFavorite() {
        const alert = this.alertCtrl.create({
            title: 'Add Favarite',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('Ok');
                    }
                },
                {
                    text: 'No, I changed my mind',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled');
                    }
                }
            ]
        });
        alert.present();
    }
}
