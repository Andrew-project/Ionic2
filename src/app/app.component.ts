import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav, NavController, AlertController, App} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {ListPage} from './templates/list/list';
import {TabsPage} from '../pages/tabs/tabs';
import {Storage} from '@ionic/storage';
import {LoginPage} from "../pages/login/login";
import firebase from 'firebase';
import {AuthService} from "../services/auth";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild('content') navCtrl: NavController;
    rootPage: any = TabsPage;
    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public menu: MenuController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private storage: Storage,
                private alertCtrl: AlertController,
                private app: App,
                private authService: AuthService) {
                this.initializeApp();
                // set our app's pages
                this.pages = [
                    {title: 'Home', component: HomePage},
                    {title: 'My First List', component: ListPage}
                ];
    }

    initializeApp() {
        firebase.initializeApp({
            apiKey: "AIzaSyDw64faPEtQtvcU0NLRUpDfRZBxrBxTvNw",
            authDomain: "ionic2-demo-4d69d.firebaseapp.com",
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.rootPage = TabsPage;
                // this.nav.setRoot(TabsPage);
            } else {
                this.rootPage = LoginPage;
                // this.nav.setRoot(LoginPage);
            }
        });
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.menu.close();
        this.navCtrl.push(page.component, {title: page.title}, {
            direction: 'back',
            duration: 1000,
            easing: 'ease-out'
        });
    }

    signOut() {
        let confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Did you want to sign out ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        this.menu.close();
                        this.authService.logout();
                        this.nav.setRoot(LoginPage);
                    }
                }
            ]
        });
        confirm.present();
    }
}
