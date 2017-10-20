import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from "ionic-angular";
import {AddPlacePage} from "../add-place/add-place";
import {PlacesService} from "../../services/places";
import {Place} from "../../models/place";
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage implements OnInit {
  places: Place[] = [];

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private placesService: PlacesService) {
  }

  ngOnInit() {
      this.placesService.fetchPlaces()
        .then(
          (places: Place[]) => {
            this.places = places;
          }
        )
        .catch();
  }

  onNewPlace() {
    this.navCtrl.push(AddPlacePage);
  }

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }

  onOpenPlace(place: Place, idx: number) {
    const modal = this.modalCtrl.create(PlacePage, {place: place, index: idx});
    modal.present();
    modal.onDidDismiss(
      data => {
        this.places = this.placesService.loadPlaces();
      }
    )
  }
}
