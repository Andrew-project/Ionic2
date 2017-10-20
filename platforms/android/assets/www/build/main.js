webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_recipe__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipesService = (function () {
    function RecipesService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.recipes = [];
    }
    RecipesService.prototype.addRecipe = function (title, description, difficulty, ingredients) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients));
    };
    RecipesService.prototype.getRecipts = function () {
        return this.recipes.slice();
    };
    RecipesService.prototype.updateRecipe = function (index, title, description, difficulty, ingredients) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    RecipesService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .put('https://ionic2-demo-4d69d.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes)
            .map(function (res) { return res.json(); });
    };
    RecipesService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .get('https://ionic2-demo-4d69d.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
            .map(function (res) {
            var recipes = res.json() ? res.json() : [];
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var item = recipes_1[_i];
                if (!item.hasOwnProperty('ingredients')) {
                    item.ingredients = [];
                }
            }
            return recipes;
        })
            .do(function (recipes) {
            if (recipes) {
                _this.recipes = recipes;
            }
            else {
                _this.recipes = [];
            }
        });
    };
    return RecipesService;
}());
RecipesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RecipesService);

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var SettingService = (function () {
    function SettingService() {
        this.isSettingBackground = false;
    }
    SettingService.prototype.isAltBackground = function () {
        return this.isSettingBackground;
    };
    SettingService.prototype.setBackground = function (alt) {
        this.isSettingBackground = alt;
    };
    return SettingService;
}());

//# sourceMappingURL=setting.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_tools__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__tools_tools__["a" /* ToolsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="主页" tabIcon="desktop" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="组件" tabIcon="hammer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListService = (function () {
    function ShoppingListService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.ingredients = [];
    }
    ShoppingListService.prototype.addItem = function (name, amount) {
        this.ingredients.push(new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount));
    };
    ShoppingListService.prototype.addItems = function (items) {
        (_a = this.ingredients).push.apply(_a, items);
        var _a;
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.removeItem = function (index) {
        this.ingredients.splice(index, 1);
    };
    ShoppingListService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .put('https://ionic2-demo-4d69d.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients)
            .map(function (res) {
            return res.json();
        });
    };
    ShoppingListService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .get('https://ionic2-demo-4d69d.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token)
            .map(function (res) {
            return res.json();
        })
            .do(function (ingredients) {
            if (ingredients) {
                _this.ingredients = ingredients;
            }
            else {
                _this.ingredients = [];
            }
        });
    };
    return ShoppingListService;
}());
ShoppingListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */]])
], ShoppingListService);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseOptionsPage = (function () {
    function DatabaseOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DatabaseOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    return DatabaseOptionsPage;
}());
DatabaseOptionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sl-options',
        template: "\n        <ion-grid text-center>\n            <ion-row>\n                <ion-col>\n                    <h3>Store & Load</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('load')\">Load List</button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('store')\">Save List</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], DatabaseOptionsPage);

//# sourceMappingURL=database-options.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipePage = (function () {
    function EditRecipePage(navParams, actionSheetController, alertCtrl, toastCtrl, recipeService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipeService = recipeService;
        this.navCtrl = navCtrl;
        this.mode = 'New';
        this.selectionOpts = ['Easy', 'Medium', 'Hard'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode === 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
        this.initialzeForm();
    };
    EditRecipePage.prototype.initialzeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode === 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            difficulty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            ingredients: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert().present();
                    }
                },
                {
                    text: 'Remove all Ingredients',
                    role: 'destructive',
                    handler: function () {
                        var fArr = _this.recipeForm.get('ingredients');
                        var len = fArr.length;
                        if (len > 0) {
                            for (var i = len - 1; i >= 0; i--) {
                                fArr.removeAt(i);
                            }
                            var toast = _this.toastCtrl.create({
                                message: 'All Ingredients were deleted!',
                                duration: 1500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        return this.alertCtrl.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.trim() === '' || data.name === null) {
                            var toast_1 = _this.toastCtrl.create({
                                message: 'Please enter a valid value!',
                                duration: 1500,
                                position: 'bottom'
                            });
                            toast_1.present();
                            return;
                        }
                        _this.recipeForm.get('ingredients')
                            .push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
                        var toast = _this.toastCtrl.create({
                            message: 'Item added',
                            duration: 1500,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }
            ]
        });
    };
    EditRecipePage.prototype.onSubmit = function () {
        var value = this.recipeForm.value;
        var ingredients = [];
        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(function (name) {
                return { name: name, amount: 1 };
            });
        }
        if (this.mode === 'Edit') {
            this.recipeService.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredients);
        }
        else {
            this.recipeService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        }
        this.recipeForm.reset();
        this.navCtrl.pop();
    };
    return EditRecipePage;
}());
EditRecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-recipe',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ mode }} Recipe</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Title</ion-label>\n                <ion-input\n                   type="text"\n                   formControlName="title"\n                ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Description</ion-label>\n                <ion-textarea formControlName="description"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Difficulty</ion-label>\n                <ion-select formControlName="difficulty">\n                    <ion-option\n                            *ngFor="let option of selectionOpts"\n                            [value]="option">{{ option }}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button type="button" clear ion-button block (click)="onManageIngredients()">Manage Ingredients</button>\n        <ion-list formArrayName="ingredients">\n            <ion-item\n                    *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index;">\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text" [formControlName]="i"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button type="submit"\n                ion-button\n                block\n                [disabled]="!recipeForm.valid"\n        >{{ mode }} Recipe</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/edit-recipe/edit-recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], EditRecipePage);

//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_place__ = __webpack_require__(785);

var PlacesService = (function () {
    function PlacesService() {
        this.places = [];
    }
    PlacesService.prototype.addPlace = function (title, description, localtion, imageUrl) {
        var place = new __WEBPACK_IMPORTED_MODULE_0__models_place__["a" /* Place */](title, description, localtion, imageUrl);
        this.places.push(place);
    };
    PlacesService.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    return PlacesService;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = (function () {
    function ModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        this.name = this.navParams.get('name');
        this.desc = this.navParams.get('desc');
    };
    ModalPage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/modal/modal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>modal</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-item>\n            <div>姓名: {{name}}</div>\n            <div>描述: {{desc}}</div>\n        </ion-item>\n    </ion-card>\n    <button ion-button (click)="onClose()" color="danger">Unremove Package</button>\n    <button ion-button (click)="onClose(true)" color="danger">Remove Package</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/modal/modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageService; });
var PackageService = (function () {
    function PackageService() {
        this.packages = [];
    }
    PackageService.prototype.addPackage = function (packageItem) {
        this.packages.push(packageItem);
    };
    PackageService.prototype.removePackage = function (packageItem) {
        var pos = this.packages.findIndex(function (item) {
            return item.name === packageItem.name;
        });
        this.packages.splice(pos, 1);
    };
    PackageService.prototype.getPackages = function () {
        return this.packages.slice();
    };
    return PackageService;
}());

//# sourceMappingURL=packageService.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('title');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{selectedItem}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let item of items"\n                (click)="itemTapped($event, item)">\n            <ion-icon name="{{item.icon}}" item-left></ion-icon>\n            {{item.title}}\n            <div class="item-note" item-right>\n                {{item.note}}\n            </div>\n        </button>\n    </ion-list>\n    <div *ngIf="selectedItem" padding>\n        You navigated here from <b>{{selectedItem}}</b>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailsPage.prototype.ionViewDidLoad = function () {
        this.selectedItem = this.navParams.get('item');
    };
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-item-details',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/item-details/item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tools_list__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsPage = (function () {
    function ToolsPage(navCtrl, toolsListService) {
        this.navCtrl = navCtrl;
        this.toolsListService = toolsListService;
    }
    ToolsPage.prototype.ionViewWillEnter = function () {
        this.toolList = this.toolsListService.getAllTools();
    };
    ToolsPage.prototype.choose = function (id) {
        var page = this.toolList.find(function (page) {
            return page.id == id;
        });
        this.navCtrl.push(page.component);
    };
    return ToolsPage;
}());
ToolsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tools',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/tools/tools.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      组件\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-item (click)="choose(item.id)" *ngFor="let item of toolList">\n      <ion-icon name="{{item.iconName}}" item-start></ion-icon>\n      {{item.title}}\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/tools/tools.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_tools_list__["a" /* ToolsListService */]])
], ToolsPage);

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_templates_date_date__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_templates_alert_alert__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_templates_card_card__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_templates_fab_fab__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_templates_list_view_list_view__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_templates_loading_loading__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_templates_test_test__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_templates_touch_event_touch_event__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shopping_shopping__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_places_places__ = __webpack_require__(366);











var ToolsListService = (function () {
    function ToolsListService() {
        this.toolsList = [
            {
                id: 1,
                iconName: 'time',
                title: 'DateTime',
                component: __WEBPACK_IMPORTED_MODULE_0__app_templates_date_date__["a" /* DatePage */]
            },
            {
                id: 2,
                iconName: 'alert',
                title: 'Alert',
                component: __WEBPACK_IMPORTED_MODULE_1__app_templates_alert_alert__["a" /* AlertPage */]
            },
            {
                id: 3,
                iconName: 'card',
                title: 'Card',
                component: __WEBPACK_IMPORTED_MODULE_2__app_templates_card_card__["a" /* CardPage */]
            },
            {
                id: 4,
                iconName: 'disc',
                title: 'FAB',
                component: __WEBPACK_IMPORTED_MODULE_3__app_templates_fab_fab__["a" /* FabPage */]
            },
            {
                id: 5,
                iconName: 'list',
                title: 'List-view',
                component: __WEBPACK_IMPORTED_MODULE_4__app_templates_list_view_list_view__["a" /* ListViewPage */]
            },
            {
                id: 6,
                iconName: 'flower',
                title: 'Loading',
                component: __WEBPACK_IMPORTED_MODULE_5__app_templates_loading_loading__["a" /* LoadingPage */]
            },
            {
                id: 7,
                iconName: 'rainy',
                title: 'Test',
                component: __WEBPACK_IMPORTED_MODULE_6__app_templates_test_test__["a" /* TestPage */]
            },
            {
                id: 8,
                iconName: 'bulb',
                title: 'Touch-event',
                component: __WEBPACK_IMPORTED_MODULE_7__app_templates_touch_event_touch_event__["a" /* TouchPage */]
            },
            {
                id: 9,
                iconName: 'water',
                title: 'Shopping',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_shopping_shopping__["a" /* ShoppingPage */]
            },
            {
                id: 10,
                iconName: 'book',
                title: 'Recipes',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__["a" /* RecipesPage */]
            },
            {
                id: 11,
                iconName: 'map',
                title: 'Place And Photo',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_places_places__["a" /* PlacesPage */]
            }
        ];
    }
    ToolsListService.prototype.getAllTools = function () {
        return this.toolsList.slice();
    };
    return ToolsListService;
}());

//# sourceMappingURL=tools.list.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatePage = (function () {
    function DatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DatePage.prototype.ionViewDidLoad = function () {
        this.timeStarts1 = this.stampToDate(1512760020000);
        console.log('ionViewDidLoad DatePage');
    };
    DatePage.prototype.log = function (date) {
        this.timeDate = this.dateToStamp(date);
        console.log(this.timeDate);
        console.log(this.stampToDate(this.timeDate));
    };
    DatePage.prototype.dateToStamp = function (date) {
        var time = Date.parse(date);
        return time - 8 * 60 * 60 * 1000;
    };
    DatePage.prototype.stampToDate = function (time) {
        var t = time + 8 * 60 * 60 * 1000;
        return new Date(t).toISOString();
    };
    return DatePage;
}());
DatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-date',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/date/date.html"*/'<!--\n  Generated template for the Date page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>时间控件</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>日期选择1</ion-label>\n      <ion-datetime displayFormat="YYYY/MM/DD HH:mm" [(ngModel)]="timeStarts1" max="2017"\n                    max="2020-12-31" ></ion-datetime>\n    </ion-item>\n    <ion-label>{{timeDate}}</ion-label>\n    <button ion-button color="light" full (click)="log(timeStarts1)">Click me</button>\n\n    <ion-item>\n      <ion-label>日期选择2</ion-label>\n      <ion-datetime displayFormat="YYYY MMM DDD" pickerFormat="YYYY MM DDDD" [(ngModel)]="timeStarts2"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>日期选择3</ion-label>\n      <ion-datetime displayFormat="YYYY M D" pickerFormat="YYYY MM DDD" cancelText="取消" doneText="确定" dayValues="[1, 10, 20, 30]" [(ngModel)]="timeStarts2"></ion-datetime>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/date/date.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], DatePage);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the Alert page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var AlertPage = (function () {
    function AlertPage(navCtrl, navParams, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage.prototype.sheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive');
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                        var navTransition = actionSheet.dismiss();
                        navTransition.then(function () {
                            _this.navCtrl.pop();
                        });
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancle clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AlertPage.prototype.alert = function () {
        var alertItem = this.alertCtrl.create({
            title: 'Low',
            subTitle: 'remaining',
            buttons: ['Dismiss']
        });
        alertItem.present();
    };
    AlertPage.prototype.alertConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Is delete it ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok');
                        var navTransition = confirm.dismiss();
                        navTransition.then(function () {
                            _this.navCtrl.pop();
                        });
                        return false;
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertPage.prototype.alertPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'please input !!!',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertPage.prototype.alertRadio = function () {
        var radio = this.alertCtrl.create();
        var color = 'yellow';
        radio.setTitle("Lightsaber color");
        radio.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: color == 'blue' ? true : false
        });
        radio.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow',
            checked: color == 'yellow' ? true : false
        });
        radio.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red',
            checked: color == 'red' ? true : false
        });
        radio.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black',
            checked: color == 'black' ? true : false
        });
        radio.addButton('Cancel');
        radio.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data);
            }
        });
        radio.present();
    };
    AlertPage.prototype.alertCheckbox = function () {
        var checkbox = this.alertCtrl.create();
        checkbox.setTitle('Which planets have you visited?');
        checkbox.addInput({
            type: 'checkbox',
            label: 'Lsh',
            value: '1',
            checked: true
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Gqz',
            value: '2',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Lsh',
            value: '3',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Gqz',
            value: '4',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Lsh',
            value: '5',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Gqz',
            value: '6',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Lsh',
            value: '7',
            checked: false
        });
        checkbox.addInput({
            type: 'checkbox',
            label: 'Gqz',
            value: '8',
            checked: false
        });
        checkbox.addButton('Cancel');
        checkbox.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Checkbox data:', data);
            }
        });
        checkbox.present();
    };
    return AlertPage;
}());
AlertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alert',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/alert/alert.html"*/'<!--\n  Generated template for the Alert page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>弹框功能</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-label>Action Sheet</ion-label>\n  <button ion-button outline color="danger" round block icon-left (click)="sheet()">\n    <ion-icon name="analytics"></ion-icon>\n    Basic Action Sheet\n  </button>\n\n  <ion-label>Alert</ion-label>\n  <button ion-button round full (click)="alert()">Alert</button>\n  <button ion-button round full (click)="alertConfirm()" color="secondary">Confirm</button>\n  <button ion-button round full (click)="alertPrompt()" color="danger">Prompt Alert</button>\n  <button ion-button round full (click)="alertRadio()" color="light">Radio Alert</button>\n  <button ion-button round full (click)="alertCheckbox()" color="dark">Checkbox Alert</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/alert/alert.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AlertPage);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardPage = (function () {
    function CardPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
    };
    CardPage.prototype.onAddToFavorite = function () {
        var alert = this.alertCtrl.create({
            title: 'Add Favarite',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        console.log('Ok');
                    }
                },
                {
                    text: 'No, I changed my mind',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancelled');
                    }
                }
            ]
        });
        alert.present();
    };
    return CardPage;
}());
CardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-card',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/card/card.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Card</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-left>\n                <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n            </ion-avatar>\n            <h3>Lsh</h3>\n            <p>五星级用户</p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>Card List</ion-card-header>\n        <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n        <ion-list>\n            <ion-item>\n                <ion-icon name="cart" item-left></ion-icon>\n                Shopping\n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="medical" item-left></ion-icon>\n                Hospital\n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="cafe" item-left></ion-icon>\n                Cafe\n            </ion-item>\n\n        </ion-list>\n        <ion-card-content>\n            <ion-card-title>我不会武功</ion-card-title>\n            <p>\n                jfosjofsojiojfoa\n            </p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 likes</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>2 Comments</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <ion-note>\n                    11h age\n                </ion-note>\n            </ion-col>\n        </ion-row>\n\n        <ion-col>\n            <ion-row>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 likes</div>\n                </button>\n            </ion-row>\n            <ion-row>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>2 Comments</div>\n                </button>\n            </ion-row>\n            <!--<ion-row center text-center>-->\n                <!--<ion-note>-->\n                    <!--11h age-->\n                <!--</ion-note>-->\n            <!--</ion-row>-->\n        </ion-col>\n\n        <ion-row>\n            <ion-col text-right>\n                <button ion-button clear small  (click)="onAddToFavorite()">Favorite</button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <ion-card>\n        <div style="position: relative;">\n            <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n            <ion-fab right top>\n                <button ion-fab>\n                    <ion-icon name="pin"></ion-icon>\n                </button>\n            </ion-fab>\n        </div>\n    </ion-card>\n</ion-content>\n<!--<ion-content class="card-background-page">-->\n    <!--<ion-card>-->\n        <!--<img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">-->\n        <!--<div class="card-title">Picture</div>-->\n        <!--<div class="card-subtitle">护理上门</div>-->\n    <!--</ion-card>-->\n<!--</ion-content>-->\n\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/card/card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CardPage);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Fab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FabPage = (function () {
    function FabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FabPage');
    };
    return FabPage;
}());
FabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-fab',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/fab/fab.html"*/'<!--\n  Generated template for the Fab page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>悬浮按钮</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-fab left top>\n    <button ion-fab mini color="secondary">\n      <ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n    <ion-fab-list side="right">\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab top right edge>\n    <button ion-fab mini color="vibrant">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab center middle>\n    <button ion-fab color="danger">\n      <ion-icon name="md-share"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n      <button ion-fab color="danger">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n    </ion-fab-list>\n\n    <ion-fab-list side="right">\n      <button ion-fab color="dark">\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n    </ion-fab-list>\n\n    <ion-fab-list side="bottom">\n      <button ion-fab color="secondary">\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/fab/fab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FabPage);

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ListView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ListViewPage = (function () {
    function ListViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListViewPage');
    };
    return ListViewPage;
}());
ListViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list-view',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/list-view/list-view.html"*/'<!--\n  Generated template for the ListView page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>列表展示</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <app-touch-event></app-touch-event>\n  <ion-item-group>\n    <ion-item-divider light>A</ion-item-divider>\n    <ion-item>Angular</ion-item>\n    <ion-item>Angular2</ion-item>\n    <ion-item-divider light>B</ion-item-divider>\n    <ion-item>Box</ion-item>\n    <ion-item>Block</ion-item>\n  </ion-item-group>\n\n  <ion-list>\n    <ion-list-header>Privacy</ion-list-header>\n    <ion-item>Tracking</ion-item>\n    <ion-item>Mouse</ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-50>A column</ion-col>\n      <ion-col>A second column</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col offset-75>A new column</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n        </ion-avatar>\n        <h2>Jack</h2>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n      </ion-thumbnail>\n      <h2>Lsh</h2>\n      <p>good</p>\n      <button ion-button item-right clear >Click</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/list-view/list-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListViewPage);

//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Loading page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingPage');
    };
    LoadingPage.prototype.loading = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loader.onDidDismiss(function () {
            console.log('Dismissed loading!!!');
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
        }, 5000);
    };
    return LoadingPage;
}());
LoadingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loading',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/loading/loading.html"*/'<!--\n  Generated template for the Loading page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>加载...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button outline (click)="loading()">Loading</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/loading/loading.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoadingPage);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setting_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestPage = (function () {
    function TestPage(viewCtrl, storage, settingService) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.settingService = settingService;
        this.isChoosed = true;
        this.viewCtrl = viewCtrl;
        console.log(this.viewCtrl.enableBack());
        console.log(this.viewCtrl.getContent());
        console.log(this.viewCtrl.isLast());
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('返回');
        storage.get('name')
            .then(function (val) {
            console.log('name is: ', val);
        });
        storage.keys().then(function (val) {
            console.log(val);
        });
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
        this.pet = 'one';
    };
    TestPage.prototype.clickRange = function () {
        console.log(this.brightness);
    };
    TestPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        console.log('state: ', refresher.state);
        refresher.pullMax = 300;
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
        console.log('state: ', refresher.state);
    };
    TestPage.prototype.onSegmentChanged = function (item) {
        this.pet = item;
    };
    TestPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.slides.enableKeyboardControl(true);
        // this.slides.lockSwipes(true);
        // this.slides.slideNext(2000, false);
        // this.slides.slidePrev(1000, true);
        console.log(currentIndex);
        this.slides.loop = true;
        // this.slides.startAutoplay();
    };
    TestPage.prototype.goToSlide = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex === this.slides.length() - 1) {
            currentIndex = 0;
        }
        else {
            currentIndex++;
        }
        this.slides.slideTo(currentIndex, 200, true);
    };
    TestPage.prototype.choose = function (toggle) {
        console.log(this.isChoosed);
        console.log(toggle);
        this.settingService.setBackground(toggle.checked);
    };
    TestPage.prototype.checkAltBackground = function () {
        return this.settingService.isAltBackground();
    };
    return TestPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], TestPage.prototype, "slides", void 0);
TestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-test',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/test/test.html"*/'<!--\n  Generated template for the Test page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>组合</ion-title>\n  </ion-navbar>\n  <!--<ion-toolbar>-->\n    <!--<ion-title>组合</ion-title>-->\n  <!--</ion-toolbar>-->\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label>Range</ion-label>\n  <ion-item>\n    <ion-range [(ngModel)]="brightness" min="0" max="300" step="10" snaps="true" pin="true" dualKnobs="true" debounce="3">\n      <ion-icon range-left small name="sunny"></ion-icon>\n      <ion-icon range-right small name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <button ion-button (click)="clickRange()">Range</button>\n\n  <ion-label>下拉刷新</ion-label>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新" pullMax="200"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-label>Segment类似标签页</ion-label>\n  <div padding>\n    <ion-segment [(ngModel)]="pet" danger>\n      <ion-segment-button value="one" (ionSelect)="onSegmentChanged(\'one\')">One</ion-segment-button>\n      <ion-segment-button value="two" (ionSelect)="onSegmentChanged(\'two\')">Two</ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'one\'">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n        </ion-thumbnail>\n        <h2>One</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'two\'">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n        </ion-thumbnail>\n        <h2>Two</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png">\n        </ion-thumbnail>\n        <h2>Three</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-label>Slides</ion-label>\n  <ion-slides pager (ionSlideDidChange)="slideChanged()">\n    <ion-slide style="background-color: green;" (click)="goToSlide()">\n      <h2>Slide 1</h2>\n    </ion-slide>\n    <ion-slide style="background-color: darkgoldenrod;" (click)="goToSlide()">\n      <h2>Slide 2</h2>\n    </ion-slide>\n    <ion-slide style="background-color: darkolivegreen;" (click)="goToSlide()">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-label>Toggles</ion-label>\n  <ion-item>\n    <ion-label color="darkLighter">LSH</ion-label>\n    <ion-toggle disabled checked="false"></ion-toggle>\n    <ion-toggle color="secondary" [(ngModel)]="isChoosed" (ionChange)="choose($event)"></ion-toggle>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Foot</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/test/test.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__services_setting_service__["a" /* SettingService */]])
], TestPage);

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TouchPage = (function () {
    function TouchPage() {
        this.tapped = 0;
        this.pressed = 0;
    }
    TouchPage.prototype.onDidReset = function (resetType) {
        switch (resetType) {
            case 'tap':
                this.tapped = 0;
                break;
            case 'press':
                this.pressed = 0;
                break;
            default:
                this.tapped = 0;
                this.pressed = 0;
                break;
        }
    };
    TouchPage.prototype.onTap = function () {
        console.log('tapped!');
        this.tapped++;
    };
    TouchPage.prototype.onPress = function () {
        console.log('pressed!');
        this.pressed++;
    };
    return TouchPage;
}());
TouchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-touch',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/touch-event/touch-event.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Touch Event</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h3>Enter the right Code</h3>\n                <p text-center>Tap twice, press four times</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item>\n                        <p>Tapped: {{tapped}}</p>\n                    </ion-item>\n                    <ion-item>\n                        <p>Pressed: {{pressed}}</p>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <app-reset (didReset)="onDidReset($event)"></app-reset>\n        <ion-row>\n            <ion-col\n                    style="background-color: lightgreen"\n                    text-center\n                    (tap)="onTap()"\n            >tap here</ion-col>\n            <ion-col\n                    style="background-color: lightgreen"\n                    text-center\n                    (press)="onPress()"\n            >press here</ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/templates/touch-event/touch-event.html"*/
    })
], TouchPage);

//# sourceMappingURL=touch-event.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_options_database_options__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingPage = (function () {
    function ShoppingPage(slService, popoverCtrl, authService, loadingCtrl, alertCtrl) {
        this.slService = slService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ShoppingPage.prototype.ionViewWillEnter = function () {
        this.loadItems();
    };
    ShoppingPage.prototype.addShopItem = function (f) {
        this.slService.addItem(f.value.ingredientName, f.value.amount);
        f.reset();
        this.loadItems();
    };
    ShoppingPage.prototype.loadItems = function () {
        this.listItems = this.slService.getItems();
    };
    ShoppingPage.prototype.onCheckItem = function (index) {
        this.slService.removeItem(index);
        this.loadItems();
    };
    ShoppingPage.prototype.onShowOpt = function (e) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '请求中...'
        });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: e });
        popover.onDidDismiss(function (data) {
            if (data) {
                loading.present();
                if (data.action === 'load') {
                    _this.authService.getActiveUser().getToken()
                        .then(function (token) {
                        _this.slService.fetchList(token)
                            .subscribe(function (list) {
                            loading.dismiss();
                            if (list) {
                                _this.listItems = list;
                            }
                            else {
                                _this.listItems = [];
                            }
                        }, function (error) {
                            loading.dismiss();
                            _this.handleError(error.message);
                        });
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleError(error.message);
                    });
                }
                else {
                    _this.authService.getActiveUser().getToken()
                        .then(function (token) {
                        _this.slService.storeList(token)
                            .subscribe(function () { return loading.dismiss(); }, function (error) {
                            loading.dismiss();
                            _this.handleError(error.message);
                        });
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleError(error.message);
                    });
                }
            }
        });
    };
    ShoppingPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: '请求错误',
            message: errorMessage,
            buttons: ['确定']
        });
        alert.present();
    };
    return ShoppingPage;
}());
ShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-shopping',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/shopping/shopping.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onShowOpt($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Shopping</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="addShopItem(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Name</ion-label>\n                <ion-input\n                        type="text"\n                        name="ingredientName"\n                        placeholder="lsh"\n                        ngModel\n                        required\n                ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Amount</ion-label>\n                <ion-input\n                        type="number"\n                        name="amount"\n                        placeholder="2"\n                        ngModel\n                        required\n                ></ion-input>\n            </ion-item>\n        </ion-list>\n        <button\n                ion-button\n                type="submit"\n                block\n                [disabled]="!f.valid">Add Item\n        </button>\n    </form>\n    <ion-list>\n        <ion-item *ngFor="let item of this.listItems; let i = index;" (click)="onCheckItem(i)">\n            <h3>{{item.name}} ({{item.amount}})</h3>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/shopping/shopping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shopping_list__["a" /* ShoppingListService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ShoppingPage);

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_recipe__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_options_database_options__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipesPage = (function () {
    function RecipesPage(navCtrl, recipeService, loadingCtrl, popoverCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
    }
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipeService.getRecipts();
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_recipe__["a" /* RecipePage */], { recipe: recipe, index: index });
    };
    RecipesPage.prototype.onShowOpt = function (e) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '请求中...'
        });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: e });
        popover.onDidDismiss(function (data) {
            if (data) {
                loading.present();
                if (data.action === 'load') {
                    _this.authService.getActiveUser().getToken()
                        .then(function (token) {
                        _this.recipeService.fetchList(token)
                            .subscribe(function (list) {
                            loading.dismiss();
                            _this.recipes = list;
                        }, function (error) {
                            loading.dismiss();
                            _this.handleError(error.message);
                        });
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleError(error.message);
                    });
                }
                else {
                    _this.authService.getActiveUser().getToken()
                        .then(function (token) {
                        _this.recipeService.storeList(token)
                            .subscribe(function () { return loading.dismiss(); }, function (error) {
                            loading.dismiss();
                            _this.handleError(error.message);
                        });
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleError(error.message);
                    });
                }
            }
        });
    };
    RecipesPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: '请求错误',
            message: errorMessage,
            buttons: ['确定']
        });
        alert.present();
    };
    return RecipesPage;
}());
RecipesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recipes',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/recipes/recipes.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button ion-only (click)="onNewRecipe()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n            <button ion-button ion-only (click)="onShowOpt($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Recipes</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let item of recipes; let i = index;" (click)="onLoadRecipe(item, i)">\n            <h2>{{item.title}}</h2>\n            <ion-note>{{item.description}}</ion-note>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/recipes/recipes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RecipesPage);

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recipes__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipePage = (function () {
    function RecipePage(navParams, navCtrl, slService, recipeService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.slService = slService;
        this.recipeService = recipeService;
    }
    RecipePage.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    RecipePage.prototype.onAddIngredients = function () {
        this.slService.addItems(this.recipe.ingredients);
    };
    RecipePage.prototype.onEditRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'Edit', recipe: this.recipe, index: this.index });
    };
    RecipePage.prototype.onDeleteRecipe = function () {
        this.recipeService.removeRecipe(this.index);
        this.navCtrl.pop();
    };
    return RecipePage;
}());
RecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recipe',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/recipe/recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{recipe.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h2>{{recipe.title}}</h2>\n        <div class="subtitle">{{recipe.difficulty}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <p>{{recipe.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor="let ingredient of recipe.ingredients">\n            {{ingredient.name}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="recipe.ingredients.length > 0">\n      <ion-col>\n        <button ion-button clear (click)="onAddIngredients()">Add Ingredients to Shopping List</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button\n                ion-button\n                outline\n                block\n                (click)="onEditRecipe()">Edit Recipe</button>\n      </ion-col>\n      <ion-col>\n        <button\n                ion-button\n                outline\n                block\n                (click)="onDeleteRecipe()"\n                color="danger">Delete Recipe</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/recipe/recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_shopping_list__["a" /* ShoppingListService */],
        __WEBPACK_IMPORTED_MODULE_4__services_recipes__["a" /* RecipesService */]])
], RecipePage);

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place_add_place__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_places__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesPage = (function () {
    function PlacesPage(navCtrl, placesService) {
        this.navCtrl = navCtrl;
        this.placesService = placesService;
        this.places = [];
        this.addPlacePage = __WEBPACK_IMPORTED_MODULE_2__add_place_add_place__["a" /* AddPlacePage */];
    }
    PlacesPage.prototype.onNewPlace = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_place_add_place__["a" /* AddPlacePage */]);
    };
    PlacesPage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
    };
    return PlacesPage;
}());
PlacesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-places',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/places/places.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button ion-only (click)="onNewPlace()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Places</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let item of places" (click)="onOpenPlace(item)">\n        <img [src]="item.imageUrl">\n        <ion-card-content>\n            <ion-card-title>\n                {{item.title}}\n            </ion-card-title>\n            <p>{{item.description}}</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/places/places.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_places__["a" /* PlacesService */]])
], PlacesPage);

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_location_set_location__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_places__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPlacePage = (function () {
    function AddPlacePage(modalCtrl, geolocation, loadingCtrl, toastCtrl, camera, placesService) {
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.placesService = placesService;
        this.location = {
            lat: 40.764324,
            lng: -73.9759827
        };
        this.locationIsSet = false;
        this.imageUrl = '';
    }
    AddPlacePage.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
        form.reset();
        this.location = {
            lat: 40.764324,
            lng: -73.9759827
        };
        this.imageUrl = '';
        this.locationIsSet = false;
    };
    AddPlacePage.prototype.onTakePhoto = function () {
        var _this = this;
        this.camera.getPicture({
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        })
            .then(function (imageData) {
            _this.imageUrl = imageData;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddPlacePage.prototype.onOpenMap = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__set_location_set_location__["a" /* SetLocationPage */], { location: this.location, isSet: this.locationIsSet });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.location = data.location;
                _this.locationIsSet = true;
            }
        });
    };
    AddPlacePage.prototype.onLocate = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Get your Location...'
        });
        loader.present();
        this.geolocation.getCurrentPosition()
            .then(function (location) {
            loader.dismiss();
            _this.location.lat = location.coords.latitude;
            _this.location.lng = location.coords.longitude;
            _this.locationIsSet = true;
        })
            .catch(function (error) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: error.message,
                duration: 2000
            });
            toast.present();
        });
    };
    return AddPlacePage;
}());
AddPlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-place',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/add-place/add-place.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Add a Place</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Title</ion-label>\n                <ion-input type="text"\n                           placeholder="Beautiful"\n                           name="title"\n                           required\n                           ngModel></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Short Description</ion-label>\n                <ion-textarea name="description"\n                              ngModel\n                              required></ion-textarea>\n            </ion-item>\n        </ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            outline\n                            type="button"\n                            block\n                            icon-left\n                            (click)="onLocate()">\n                        <ion-icon name="locate"></ion-icon>\n                        Locate me\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            outline\n                            type="button"\n                            block\n                            icon-left\n                            (click)="onOpenMap()">\n                        <ion-icon name="map"></ion-icon>\n                        Select on Map\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="locationIsSet">\n                <ion-col>\n                    <sebm-google-map\n                            [latitude]="location.lat"\n                            [longitude]="location.lng"\n                            [zoom]="16">\n                        <sebm-google-map-marker\n                                [latitude]="location.lat"\n                                [longitude]="location.lng"\n                        ></sebm-google-map-marker>\n                    </sebm-google-map>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col text-center>\n                    <h5>Take a Photo!</h5>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            outline\n                            type="button"\n                            block\n                            icon-left\n                            (click)="onTakePhoto()">\n                        <ion-icon name="camera"></ion-icon>\n                        Open Camera\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="imageUrl != \'\'">\n                <ion-col>\n                    <img [src]="imageUrl">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            color="secondary"\n                            block\n                            [disabled]="!f.valid || !locationIsSet || imageUrl == \'\'"\n                            type="submit">\n                        Add this Place\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/add-place/add-place.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__services_places__["a" /* PlacesService */]])
], AddPlacePage);

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_location__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetLocationPage = (function () {
    function SetLocationPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.location = this.navParams.get('location');
        if (this.navParams.get('isSet')) {
            this.marker = this.location;
        }
    }
    SetLocationPage.prototype.onSetMarker = function (e) {
        console.log(e);
        this.marker = new __WEBPACK_IMPORTED_MODULE_1__models_location__["a" /* Location */](e.coords.lat, e.coords.lng);
    };
    SetLocationPage.prototype.onConfirm = function () {
        this.viewCtrl.dismiss({ location: this.marker });
    };
    SetLocationPage.prototype.onAbort = function () {
        this.viewCtrl.dismiss();
    };
    return SetLocationPage;
}());
SetLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-location',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/set-location/set-location.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Choose Location</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <sebm-google-map\n                        [latitude]="location.lat"\n                        [longitude]="location.lng"\n                        [zoom]="16"\n                        (mapClick)="onSetMarker($event)">\n                    <sebm-google-map-marker\n                            [latitude]="marker.lat"\n                            [longitude]="marker.lng"\n                            *ngIf="marker"\n                    ></sebm-google-map-marker>\n                </sebm-google-map>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button\n                ion-button\n                block\n                color="secondary"\n                (click)="onConfirm()"\n                [disabled]="!marker">Confirm</button>\n            </ion-col>\n            <ion-col>\n                <button\n                ion-button\n                block\n                color="danger"\n                (click)="onAbort()">Abort</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/set-location/set-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */]])
], SetLocationPage);

//# sourceMappingURL=set-location.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friend_service__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = (function () {
    function UserPage(navCtrl, friendService) {
        this.navCtrl = navCtrl;
        this.friendService = friendService;
        this.friends = [];
        this.likesNum = 1;
    }
    UserPage.prototype.onBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */])
            .catch(function (error) { return console.log(error); });
    };
    UserPage.prototype.addLike = function () {
        this.likesNum++;
    };
    UserPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewCanEnter');
        var rnd = Math.random();
        return rnd > 0.1;
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    UserPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
        this.friends = this.friendService.getFriends();
        console.log(this.friends);
    };
    UserPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
    };
    UserPage.prototype.ionViewCanLeave = function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
        console.log('ionViewCanLeave');
        return promise;
    };
    UserPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave');
    };
    UserPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave');
    };
    UserPage.prototype.ionViewWillUnload = function () {
        console.log('ionViewWillUnload');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/user/user.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            动态\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class="user-list">\n        <ion-item ion-item *ngFor="let friend of friends">\n            <ion-row>\n                <ion-col width-15>\n                    <ion-avatar>\n                        <img src="{{friend.avatar}}">\n                    </ion-avatar>\n                </ion-col>\n                <ion-col>\n                    <h1>{{friend.name}}</h1>\n                    <p margin-bottom>{{friend.remark}}</p>\n                    <div *ngIf="friend.pics">\n                        <div *ngFor="let url of friend.pics">\n                            <img src="{{url}}">\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button disabled icon-left text-center clear small color="dark">\n                        <ion-icon name="pin"></ion-icon>\n                        <div>{{friend.address}}</div>\n                    </button>\n                </ion-col>\n                <ion-col text-center>\n                    <button ion-button icon-right clear small (click)="addLike()">\n                        <ion-icon name="thumbs-up"></ion-icon>&nbsp;\n                        <div *ngIf="likesNum > 0">{{likesNum}} likes</div>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/user/user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_friends_friend__ = __webpack_require__(786);

var FriendService = (function () {
    function FriendService() {
        this.friends = [];
        this.friends = __WEBPACK_IMPORTED_MODULE_0__data_friends_friend__["a" /* default */];
    }
    FriendService.prototype.addFriend = function (friend) {
        this.friends.push(friend);
    };
    FriendService.prototype.deleteFriend = function (friend) {
        var pos = this.friends.findIndex(function (item) { return item.id === friend.id; });
        this.friends.splice(pos, 1);
    };
    FriendService.prototype.getFriends = function () {
        return this.friends.slice();
    };
    return FriendService;
}());

//# sourceMappingURL=friend.service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(storage, app, loadingCtrl, alertCtrl, navCtrl, authService) {
        this.storage = storage;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    LoginPage.prototype.login = function (form) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "<span class=\"loading-span\">\u52AA\u529B\u767B\u5F55\u4E2D...</span>",
            cssClass: "loading-span"
        });
        loader.onDidDismiss(function () {
            console.log('Dismissed loading!!!');
        });
        loader.present();
        this.authService.signin(form.value.email, form.value.password)
            .then(function (data) {
            loader.dismiss();
            _this.storage.set('token', 'wxwquosfasjlew');
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            loader.dismiss();
            var alertItem = _this.alertCtrl.create({
                title: '登录失败',
                subTitle: error.message,
                buttons: ['关闭']
            });
            alertItem.present();
        });
    };
    LoginPage.prototype.toSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>登录</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="login(f)">\n        <ion-list>\n            <ion-item no-lines>\n                <ion-avatar>\n                    <img src="assets/test/avatarUrl.jpeg"/>\n                </ion-avatar>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Email</ion-label>\n                <ion-input\n                        type="email"\n                        name="email"\n                        placeholder="请输入你的Email"\n                        ngModel\n                        required\n                ></ion-input>\n            </ion-item>\n            <ion-item no-lines class="last-input">\n                <ion-label fixed>密码</ion-label>\n                <ion-input\n                        type="password"\n                        name="password"\n                        placeholder="请输入密码"\n                        ngModel\n                        required\n                ></ion-input>\n            </ion-item>\n        </ion-list>\n        <button\n                ion-button\n                type="submit"\n                block\n                [disabled]="!f.valid">登录\n        </button>\n        <button ion-button\n                clear\n                block\n                type="button"\n                (click)="toSignUp()"\n        >\n            没有帐号？去注册！\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth__["a" /* AuthService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignUp = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.authService.signup(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/signup/signup.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSignUp(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>Email</ion-label>\n                <ion-input type="email"\n                           name="email"\n                           ngModel\n                           required\n                           placeholder="邮箱注册">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>密码</ion-label>\n                <ion-input type="password"\n                           name="password"\n                           ngModel\n                           required\n                           placeholder="至少6位"\n                           [minlength]="6"\n                ></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button\n                block\n                type="submit"\n                [disabled]="!f.valid">\n            注册\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_item_details_item_details__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_list_list__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tools_tools__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_date_date__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__templates_alert_alert__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__templates_card_card__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__templates_fab_fab__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__templates_list_view_list_view__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__templates_loading_loading__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modal_modal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__templates_test_test__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_packageService__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_friend_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_setting_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_touch_event_component__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__templates_touch_event_touch_event__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_reset_component__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login_login__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_login_service__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_shopping_shopping__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_shopping_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_tools_list__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_recipes_recipes__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_edit_recipe_edit_recipe__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_recipe_recipe__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_recipes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_database_options_database_options__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_place_place__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_add_place_add_place__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_set_location_set_location__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_google_maps_core__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_places_places__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_places__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tools_tools__["a" /* ToolsPage */],
            __WEBPACK_IMPORTED_MODULE_4__templates_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_5__templates_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__templates_date_date__["a" /* DatePage */],
            __WEBPACK_IMPORTED_MODULE_10__templates_alert_alert__["a" /* AlertPage */],
            __WEBPACK_IMPORTED_MODULE_11__templates_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_12__templates_fab_fab__["a" /* FabPage */],
            __WEBPACK_IMPORTED_MODULE_13__templates_list_view_list_view__["a" /* ListViewPage */],
            __WEBPACK_IMPORTED_MODULE_14__templates_loading_loading__["a" /* LoadingPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_modal_modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__templates_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_21__components_touch_event_component__["a" /* TouchEventComponent */],
            __WEBPACK_IMPORTED_MODULE_22__templates_touch_event_touch_event__["a" /* TouchPage */],
            __WEBPACK_IMPORTED_MODULE_23__components_reset_component__["a" /* ResetComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_shopping_shopping__["a" /* ShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_recipes_recipes__["a" /* RecipesPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_recipe_recipe__["a" /* RecipePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_database_options_database_options__["a" /* DatabaseOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_place_place__["a" /* PlacePage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_add_place_add_place__["a" /* AddPlacePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_set_location_set_location__["a" /* SetLocationPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_places_places__["a" /* PlacesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_38__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_43_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBRBmYbWjlmXtrrgLyfjZKu3oyoAPJdYaQ'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__templates_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_5__templates_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tools_tools__["a" /* ToolsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_9__templates_date_date__["a" /* DatePage */],
            __WEBPACK_IMPORTED_MODULE_10__templates_alert_alert__["a" /* AlertPage */],
            __WEBPACK_IMPORTED_MODULE_11__templates_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_12__templates_fab_fab__["a" /* FabPage */],
            __WEBPACK_IMPORTED_MODULE_13__templates_list_view_list_view__["a" /* ListViewPage */],
            __WEBPACK_IMPORTED_MODULE_14__templates_loading_loading__["a" /* LoadingPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_modal_modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__templates_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_22__templates_touch_event_touch_event__["a" /* TouchPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_shopping_shopping__["a" /* ShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_recipes_recipes__["a" /* RecipesPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_recipe_recipe__["a" /* RecipePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_database_options_database_options__["a" /* DatabaseOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_place_place__["a" /* PlacePage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_add_place_add_place__["a" /* AddPlacePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_set_location_set_location__["a" /* SetLocationPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_places_places__["a" /* PlacesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__services_packageService__["a" /* PackageService */], __WEBPACK_IMPORTED_MODULE_19__services_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_20__services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_28__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_30__services_shopping_list__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_31__services_tools_list__["a" /* ToolsListService */], __WEBPACK_IMPORTED_MODULE_35__services_recipes__["a" /* RecipesService */], __WEBPACK_IMPORTED_MODULE_37__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_47__services_places__["a" /* PlacesService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_list_list__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, storage, alertCtrl, app, authService) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_5__templates_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDw64faPEtQtvcU0NLRUpDfRZBxrBxTvNw",
            authDomain: "ionic2-demo-4d69d.firebaseapp.com",
        });
        __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                // this.nav.setRoot(TabsPage);
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                // this.nav.setRoot(LoginPage);
            }
        });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.navCtrl.push(page.component, { title: page.title }, {
            direction: 'back',
            duration: 1000,
            easing: 'ease-out'
        });
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Did you want to sign out ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.menu.close();
                        _this.authService.logout();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-list style="margin: 0 !important;">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png" style="width: 5rem !important; height: 5rem !important; border-radius: 50%; overflow:hidden;">\n        </ion-avatar>\n        <h2>Lsh</h2>\n        <h4>boy</h4>\n      </ion-item>\n    </ion-list>\n    <!--<ion-toolbar>-->\n      <!--<ion-title>Pages</ion-title>-->\n    <!--</ion-toolbar>-->\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item\n              icon-left\n              *ngFor="let p of pages"\n              (click)="openPage(p)">\n        <ion-icon name="book"></ion-icon>\n        {{p.title}}\n      </button>\n      <button\n              ion-item\n              (click)="signOut()"\n              icon-left>\n        <ion-icon name="log-out"></ion-icon>\n        SignOut\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_10__services_auth__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = (function () {
    function Place(title, description, location, imageUrl) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.imageUrl = imageUrl;
    }
    return Place;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        id: 1,
        name: 'lx',
        avatar: 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png',
        remark: '嘿嘿嘿',
        pics: ['http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png', 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png'],
        address: '北京市朝阳区大屯路东'
    }
]);
//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TouchEventComponent = (function () {
    function TouchEventComponent() {
    }
    TouchEventComponent.prototype.onEleClick = function () {
        console.log('I was Clicked!');
    };
    TouchEventComponent.prototype.onEleTap = function () {
        console.log('I was Tapped!');
    };
    TouchEventComponent.prototype.onElePress = function () {
        console.log('I was Pressed!');
    };
    return TouchEventComponent;
}());
TouchEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-touch-event',
        template: "\n        <div class=\"gestures\" (click)=\"onEleClick()\">\n            Click me\n        </div>\n\n        <div class=\"gestures\" (tap)=\"onEleTap()\">\n            Tap me\n        </div>\n\n\n        <div class=\"gestures\" (press)=\"onElePress()\" (tap)=\"onEleTap()\" (click)=\"onEleClick()\">\n            long Press me\n        </div>\n    "
    })
], TouchEventComponent);

//# sourceMappingURL=touch-event.component.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = (function () {
    function ResetComponent() {
        this.didReset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ResetComponent.prototype.onReset = function (type) {
        this.didReset.emit(type);
    };
    return ResetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ResetComponent.prototype, "didReset", void 0);
ResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset',
        template: "\n        <ion-row>\n            <ion-col>\n                <button ion-button \n                        color=\"danger\" \n                        small\n                        block\n                        (click)=\"onReset('all')\">Reset All</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button\n                        color=\"danger\"\n                        small\n                        block\n                        (click)=\"onReset('tap')\">Reset \"Taps\"</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button\n                        color=\"danger\"\n                        small\n                        block\n                        (click)=\"onReset('press')\">Reset \"Presses\"</button>\n            </ion-col>\n        </ion-row>\n    "
    })
], ResetComponent);

//# sourceMappingURL=reset.component.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var LoginService = (function () {
    function LoginService() {
    }
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlacePage = (function () {
    function PlacePage() {
    }
    return PlacePage;
}());
PlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-place',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/place/place.html"*/'<!--\n  Generated template for the PlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/place/place.html"*/,
    })
], PlacePage);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_packageService__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setting_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(modalCtrl, packageService, settingService) {
        this.modalCtrl = modalCtrl;
        this.packageService = packageService;
        this.settingService = settingService;
        this.date = new Date();
        this.myInput = '';
    }
    HomePage.prototype.initializeItems = function () {
        this.listItem = this.packageService.getPackages();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.initializeItems();
    };
    HomePage.prototype.getItem = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listItem = this.listItem.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.addPackage = function () {
        var pack = {
            name: 'A' + parseFloat(Math.random().toFixed(2)) * 100,
            imgUrl: 'http://yhjstatic-dev.oss-cn-shanghai.aliyuncs.com/avatar/fc75cf14-31c1-5d54-a467-5caa20d2b549.png',
            desc: 'good',
            total: parseFloat(Math.random().toFixed(2)) * 100,
            time: new Date().getTime() + parseFloat(Math.random().toFixed(2)) * 100000000
        };
        this.packageService.addPackage(pack);
    };
    ;
    HomePage.prototype.presentModal = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], item);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.packageService.removePackage(item);
            }
        });
    };
    HomePage.prototype.onRemove = function (item) {
        this.packageService.removePackage(item);
        var pos = this.listItem.findIndex(function (pack) {
            return pack.name === item.name;
        });
        this.listItem.splice(pos, 1);
    };
    HomePage.prototype.getBackground = function () {
        return this.settingService.isAltBackground() ? 'settingBackground' : 'packageBackground';
    };
    HomePage.prototype.isAltBackground = function () {
        return this.settingService.isAltBackground();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <!--<ion-title>首页</ion-title>-->\n        <ion-searchbar [(ngModel)]="myInput" placeholder="Search" (ionInput)="getItem($event)"></ion-searchbar>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addPackage()">\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of listItem">\n            <ion-item color="packageBackground" [ngClass]="{alt: isAltBackground()}" (click)="presentModal(item)">\n                <ion-avatar item-start>\n                    <img src="{{item.imgUrl}}">\n                </ion-avatar>\n                <p>{{item.name}}</p>\n                <ion-badge>{{item.total}}</ion-badge>\n                <ion-note item-end>{{item.time | date: \'yyyy-MM-dd HH:mm\'}}</ion-note>\n            </ion-item>\n            <ion-item-options>\n                <button ion-button (click)="onRemove(item)" color="danger">\n                    <ion-icon name="trash"></ion-icon>\n                    Delete\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ShaohuaLi/.Trash/Ionic-demo/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__services_packageService__["a" /* PackageService */],
        __WEBPACK_IMPORTED_MODULE_4__services_setting_service__["a" /* SettingService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map