import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoadingController, ModalController, ToastController} from "ionic-angular";
import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";
import {Geolocation} from '@ionic-native/geolocation';
import {Camera} from "@ionic-native/camera";
import {PlacesService} from "../../services/places";
import {Entry, File, FileError} from "@ionic-native/file";

declare var cordova: any;

@Component({
    selector: 'page-add-place',
    templateUrl: 'add-place.html',
})
export class AddPlacePage {
    location: Location = {
        lat: 40.764324,
        lng: -73.9759827
    };
    locationIsSet = false;
    imageUrl: string = '';

    constructor(private modalCtrl: ModalController,
                private geolocation: Geolocation,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController,
                private camera: Camera,
                private file: File,
                private placesService: PlacesService) {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.placesService.addPlace(
            form.value.title,
            form.value.description,
            this.location,
            this.imageUrl
        );
        form.reset();
        this.location = {
            lat: 40.764324,
            lng: -73.9759827
        };
        this.imageUrl = '';
        this.locationIsSet = false;
    }

    onTakePhoto() {
        this.camera.getPicture({
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        })
            .then(
                imageData => {
                  const currentName = imageData.replace(/^.*[\\\/]/, '');
                  const path = imageData.replace(/[^\/]*$/, '');
                  const newFileName = new Date().getUTCMilliseconds() + '.jpg';
                  this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
                    .then(
                      (data: Entry) => {
                        this.imageUrl = data.nativeURL;
                        this.camera.cleanup();
                        // this.file.removeFile(path, currentName);
                      }
                    )
                    .catch(
                      (err: FileError) => {
                        this.imageUrl = '';
                        const toast = this.toastCtrl.create({
                          message: 'Could not save the image, please try again',
                          duration: 2000
                        });
                        toast.present();
                        this.camera.cleanup();
                      }
                    );
                }
            )
            .catch(
                error => {
                  const toast = this.toastCtrl.create({
                    message: 'Could not take the image, please try again',
                    duration: 2000
                  });
                  toast.present();
                }
            )
    }

    onOpenMap() {
        const modal = this.modalCtrl.create(SetLocationPage, {location: this.location, isSet: this.locationIsSet});
        modal.present();
        modal.onDidDismiss(
            data => {
                if (data) {
                    this.location = data.location;
                    this.locationIsSet = true;
                }
            }
        )
    }

    onLocate() {
        const loader = this.loadingCtrl.create({
            content: 'Get your Location...'
        });
        loader.present();
        this.geolocation.getCurrentPosition()
            .then(
                location => {
                    loader.dismiss();
                    this.location.lat = location.coords.latitude;
                    this.location.lng = location.coords.longitude;
                    this.locationIsSet = true;
                }
            )
            .catch(
                error => {
                    loader.dismiss();
                    const toast = this.toastCtrl.create({
                        message: error.message,
                        duration: 2000
                    });
                    toast.present();
                }
            )
    }
}
