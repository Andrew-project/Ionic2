import {Component, ViewChild} from '@angular/core';
import {Slides, Toggle, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {SettingService} from "../../../services/setting.service";

@Component({
    selector: 'page-test',
    templateUrl: 'test.html'
})
export class TestPage {
    @ViewChild(Slides) slides: Slides;
    brightness: any;
    pet: string;
    isChoosed: boolean = true;

    constructor(private viewCtrl: ViewController,
                private storage: Storage,
                private settingService: SettingService) {
                    this.viewCtrl = viewCtrl;
                    console.log(this.viewCtrl.enableBack());
                    console.log(this.viewCtrl.getContent());

                    console.log(this.viewCtrl.isLast());
                    this.viewCtrl.showBackButton(false);

                    this.viewCtrl.setBackButtonText('返回');
                    storage.get('name')
                        .then((val) => {
                            console.log('name is: ', val);
                        });
                    storage.keys().then((val) => {
                        console.log(val);
                    })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TestPage');
        this.pet = 'one';
    }

    clickRange() {
        console.log(this.brightness);
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        console.log('state: ', refresher.state);
        refresher.pullMax = 300;
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
        console.log('state: ', refresher.state);
    }

    onSegmentChanged(item) {
        this.pet = item;
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        this.slides.enableKeyboardControl(true);
        // this.slides.lockSwipes(true);
        // this.slides.slideNext(2000, false);
        // this.slides.slidePrev(1000, true);
        console.log(currentIndex);
        this.slides.loop = true;
        // this.slides.startAutoplay();
    }

    goToSlide() {
        let currentIndex = this.slides.getActiveIndex();
        if (currentIndex === this.slides.length() - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        this.slides.slideTo(currentIndex, 200, true);
    }

    choose(toggle: Toggle) {
        console.log(this.isChoosed);
        console.log(toggle);
        this.settingService.setBackground(toggle.checked);
    }

    checkAltBackground() {
        return this.settingService.isAltBackground();
    }
}
