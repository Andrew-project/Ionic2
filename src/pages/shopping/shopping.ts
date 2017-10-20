import {Component} from '@angular/core';
import {AlertController, LoadingController,PopoverController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../models/ingredient";
import {ShoppingListService} from "../../services/shopping-list";
import {AuthService} from "../../services/auth";
import {DatabaseOptionsPage} from "../database-options/database-options";

@Component({
    selector: 'page-shopping',
    templateUrl: 'shopping.html',
})
export class ShoppingPage {
    listItems: Ingredient[];

    constructor(private slService: ShoppingListService,
                private popoverCtrl: PopoverController,
                private authService: AuthService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {
    }

    ionViewWillEnter() {
        this.loadItems();
    }

    addShopItem(f: NgForm) {
        this.slService.addItem(f.value.ingredientName, f.value.amount);
        f.reset();
        this.loadItems();
    }

    private loadItems() {
        this.listItems = this.slService.getItems();
    }

    onCheckItem(index: number) {
        this.slService.removeItem(index);
        this.loadItems();
    }

    onShowOpt(e: MouseEvent) {
        const loading = this.loadingCtrl.create({
            content: '请求中...'
        });
        const popover = this.popoverCtrl.create(DatabaseOptionsPage);
        popover.present({ev: e});
        popover.onDidDismiss(
            data => {
                if (data) {
                    loading.present();
                    if (data.action === 'load') {
                        this.authService.getActiveUser().getToken()
                            .then(
                                (token: string) => {
                                    this.slService.fetchList(token)
                                        .subscribe(
                                            (list: Ingredient[]) => {
                                                loading.dismiss();
                                                if (list) {
                                                    this.listItems = list;
                                                } else {
                                                    this.listItems = [];
                                                }
                                            },
                                            error => {
                                                loading.dismiss();
                                                this.handleError(error.message);
                                            }
                                        );
                                }
                            )
                            .catch(
                                (error: any) => {
                                    loading.dismiss();
                                    this.handleError(error.message);
                                }
                            )
                    } else {
                        this.authService.getActiveUser().getToken()
                            .then(
                                (token: string) => {
                                    this.slService.storeList(token)
                                        .subscribe(
                                            () => loading.dismiss(),
                                            error => {
                                                loading.dismiss();
                                                this.handleError(error.message);
                                            }
                                        );
                                }
                            )
                            .catch(
                                (error: any) => {
                                    loading.dismiss();
                                    this.handleError(error.message);
                                }
                            )
                    }
                }
            }
        );
    }

    private handleError(errorMessage: string) {
        const alert = this.alertCtrl.create({
            title: '请求错误',
            message: errorMessage,
            buttons: ['确定']
        });
        alert.present();
    }
}
