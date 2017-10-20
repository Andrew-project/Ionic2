import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html'
})
export class ModalPage {
    name: string;
    desc: number;

    constructor(private navParams: NavParams,
                private viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalPage');
        this.name = this.navParams.get('name');
        this.desc = this.navParams.get('desc');
    }

    onClose(remove = false) {
        this.viewCtrl.dismiss(remove);
    }
}
