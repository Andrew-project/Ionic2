import {Place} from "../models/place";
import {Location} from "../models/location";

export class PlacesService {
    private places: Place[] =[];

    addPlace(title: string,
             description: string,
             localtion: Location,
             imageUrl: string) {
        const place = new Place(title, description, localtion, imageUrl);
        this.places.push(place);
    }

    loadPlaces() {
        return this.places.slice();
    }
}