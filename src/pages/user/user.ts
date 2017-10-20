import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Friend} from "../../data/friends/friend.interface";
import {FriendService} from "../../services/friend.service";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage {
    name: string;
    friends: Friend[] = [];
    likesNum: number = 1;

    constructor(private navCtrl: NavController,
                private friendService: FriendService) {
    }

    onBack() {
        this.navCtrl.push(HomePage)
            .catch(error => console.log(error));
    }

    addLike() {
        this.likesNum++;
    }

    ionViewCanEnter(): boolean | Promise<void> {
        console.log('ionViewCanEnter');
        const rnd = Math.random();
        return rnd > 0.1;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad');
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.friends = this.friendService.getFriends();
        console.log(this.friends)
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }

    ionViewCanLeave(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        console.log('ionViewCanLeave');
        return promise;
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }

    ionViewWillUnload() {
        console.log('ionViewWillUnload');
    }

}