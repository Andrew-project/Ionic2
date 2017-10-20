import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Recipe} from "../../models/recipe";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {ShoppingListService} from "../../services/shopping-list";
import {RecipesService} from "../../services/recipes";

@Component({
    selector: 'page-recipe',
    templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {
    recipe: Recipe;
    index: number;

    constructor(private navParams: NavParams,
                private navCtrl: NavController,
                private slService: ShoppingListService,
                private recipeService: RecipesService) {
    }

    ngOnInit() {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    }

    onAddIngredients() {
        this.slService.addItems(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index})
    }

    onDeleteRecipe() {
        this.recipeService.removeRecipe(this.index);
        this.navCtrl.pop();
    }
}
