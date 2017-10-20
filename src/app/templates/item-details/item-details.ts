import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
    selectedItem: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad () {
        this.selectedItem = this.navParams.get('item');
    }
}
