import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {AddPlacePage} from "../add-place/add-place";
import {PlacesService} from "../../services/places";
import {Place} from "../../models/place";

@Component({
    selector: 'page-places',
    templateUrl: 'places.html',
})
export class PlacesPage {
    places: Place[] = [];
    addPlacePage = AddPlacePage;

    constructor(private navCtrl: NavController,
                private placesService: PlacesService) {
    }

    onNewPlace() {
        this.navCtrl.push(AddPlacePage);
    }

    ionViewWillEnter() {
        this.places = this.placesService.loadPlaces();
    }
}
