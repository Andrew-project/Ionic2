import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ItemDetailsPage} from './templates/item-details/item-details';
import {ListPage} from './templates/list/list';
import {TabsPage} from '../pages/tabs/tabs';
import {ToolsPage} from '../pages/tools/tools';
import {UserPage} from '../pages/user/user';
import {DatePage} from './templates/date/date';
import {AlertPage} from './templates/alert/alert';
import {CardPage} from './templates/card/card';
import {FabPage} from './templates/fab/fab';
import {ListViewPage} from './templates/list-view/list-view';
import {LoadingPage} from './templates/loading/loading';
import {ModalPage} from '../pages/modal/modal';
import {TestPage} from './templates/test/test';
import {IonicStorageModule} from '@ionic/storage';
import {PackageService} from "../services/packageService";
import {FriendService} from "../services/friend.service";
import {SettingService} from "../services/setting.service";
import {TouchEventComponent} from "../components/touch-event.component";
import {TouchPage} from "./templates/touch-event/touch-event";
import {ResetComponent} from "../components/reset.component";
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {LoginPage} from "../pages/login/login";
import {LoginService} from "../services/login.service";
import {ShoppingPage} from "../pages/shopping/shopping";
import {ShoppingListService} from "../services/shopping-list";
import {ToolsListService} from "../services/tools.list";
import {RecipesPage} from "../pages/recipes/recipes";
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {RecipePage} from "../pages/recipe/recipe";
import {RecipesService} from "../services/recipes";
import {SignupPage} from "../pages/signup/signup";
import {AuthService} from "../services/auth";
import {HttpModule} from "@angular/http";
import {DatabaseOptionsPage} from "../pages/database-options/database-options";
import {PlacePage} from "../pages/place/place";
import {AddPlacePage} from "../pages/add-place/add-place";
import {SetLocationPage} from "../pages/set-location/set-location";
import {AgmCoreModule} from "angular2-google-maps/core";
import {Geolocation} from "@ionic-native/geolocation";
import {Camera} from "@ionic-native/camera";
import {PlacesPage} from "../pages/places/places";
import {PlacesService} from "../services/places";

@NgModule({
    declarations: [
        MyApp,
        ToolsPage,
        ItemDetailsPage,
        ListPage,
        TabsPage,
        UserPage,
        HomePage,
        DatePage,
        AlertPage,
        CardPage,
        FabPage,
        ListViewPage,
        LoadingPage,
        ModalPage,
        TestPage,
        TouchEventComponent,
        TouchPage,
        ResetComponent,
        LoginPage,
        ShoppingPage,
        RecipesPage,
        EditRecipePage,
        RecipePage,
        SignupPage,
        DatabaseOptionsPage,
        PlacePage,
        AddPlacePage,
        SetLocationPage,
        PlacesPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBRBmYbWjlmXtrrgLyfjZKu3oyoAPJdYaQ'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ItemDetailsPage,
        ListPage,
        TabsPage,
        ToolsPage,
        UserPage,
        DatePage,
        AlertPage,
        CardPage,
        FabPage,
        ListViewPage,
        LoadingPage,
        ModalPage,
        TestPage,
        TouchPage,
        LoginPage,
        ShoppingPage,
        RecipesPage,
        EditRecipePage,
        RecipePage,
        SignupPage,
        DatabaseOptionsPage,
        PlacePage,
        AddPlacePage,
        SetLocationPage,
        PlacesPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PackageService, FriendService, SettingService, LoginService,
        ShoppingListService, ToolsListService, RecipesService, AuthService,
        Geolocation, Camera, PlacesService
    ]
})
export class AppModule {
}
