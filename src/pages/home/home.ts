import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {PackageService} from "../../services/packageService";
import {Package} from "../../data/servicePage/servicePage.interface";
import {SettingService} from "../../services/setting.service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    listItem: { name: string, imgUrl: string, desc: string, total: number, time: number }[];
    date = new Date();
    myInput = '';

    constructor(private modalCtrl: ModalController,
                private packageService: PackageService,
                private settingService: SettingService) {
    }

    initializeItems() {
        this.listItem = this.packageService.getPackages();
    }

    ionViewWillEnter() {
        this.initializeItems();
    }

    getItem(ev: any) {
        this.initializeItems();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.listItem = this.listItem.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    addPackage() {
        let pack = {
            name: 'A' + parseFloat(Math.random().toFixed(2)) * 100,
            imgUrl: 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png',
            desc: 'good',
            total: parseFloat(Math.random().toFixed(2)) * 100,
            time: new Date().getTime() + parseFloat(Math.random().toFixed(2)) * 100000000
        };
        this.packageService.addPackage(pack);
    };

    presentModal(item: Package) {
        let modal = this.modalCtrl.create(ModalPage, item);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if (remove) {
                this.packageService.removePackage(item);
            }
        });
    }

    onRemove (item: Package) {
        this.packageService.removePackage(item);
        const pos = this.listItem.findIndex(pack => {
            return pack.name === item.name;
        });
        this.listItem.splice(pos, 1);
    }

    getBackground() {
        return this.settingService.isAltBackground() ? 'settingBackground' : 'packageBackground';
    }

    isAltBackground() {
        return this.settingService.isAltBackground();
    }
}
