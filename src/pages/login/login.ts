import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertController, App, LoadingController, NavController} from "ionic-angular";
import {TabsPage} from "../tabs/tabs";
import {Storage} from '@ionic/storage';
import {SignupPage} from "../signup/signup";
import {AuthService} from "../../services/auth";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(private storage: Storage,
                private app: App,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private navCtrl: NavController,
                private authService: AuthService) {
    }

    login(form: NgForm) {
        let loader = this.loadingCtrl.create({
            content: `<span class="loading-span">努力登录中...</span>`,
            cssClass: `loading-span`
        });

        loader.onDidDismiss(() => {
            console.log('Dismissed loading!!!');
        });

        loader.present();

        this.authService.signin(form.value.email, form.value.password)
            .then(data => {
                loader.dismiss();
                this.storage.set('token', 'wxwquosfasjlew');
                this.app.getRootNav().setRoot(TabsPage);
            })
            .catch(error => {
                loader.dismiss();
                let alertItem = this.alertCtrl.create({
                    title: '登录失败',
                    subTitle: error.message,
                    buttons: ['关闭']
                });
                alertItem.present();
            });
    }

    toSignUp() {
        this.navCtrl.push(SignupPage);
    }
}

