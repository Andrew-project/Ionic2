import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, PopoverController} from "ionic-angular";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {Recipe} from "../../models/recipe";
import {RecipesService} from "../../services/recipes";
import {RecipePage} from "../recipe/recipe";
import {DatabaseOptionsPage} from "../database-options/database-options";
import {AuthService} from "../../services/auth";

@Component({
    selector: 'page-recipes',
    templateUrl: 'recipes.html',
})
export class RecipesPage {
    recipes: Recipe[];

    constructor(private navCtrl: NavController,
                private recipeService: RecipesService,
                private loadingCtrl: LoadingController,
                private popoverCtrl: PopoverController,
                private authService: AuthService,
                private alertCtrl: AlertController) {
    }

    ionViewWillEnter() {
        this.recipes = this.recipeService.getRecipts();
    }

    onNewRecipe() {
        this.navCtrl.push(EditRecipePage, {mode: 'New'});
    }

    onLoadRecipe(recipe: Recipe, index: number) {
        this.navCtrl.push(RecipePage, {recipe: recipe, index: index})
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
                                    this.recipeService.fetchList(token)
                                        .subscribe(
                                            (list: Recipe[]) => {
                                                loading.dismiss();
                                                this.recipes = list;
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
                                    this.recipeService.storeList(token)
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
