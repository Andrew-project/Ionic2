
import {Component} from "@angular/core";

@Component({
    selector: 'app-touch-event',
    template: `
        <div class="gestures" (click)="onEleClick()">
            Click me
        </div>

        <div class="gestures" (tap)="onEleTap()">
            Tap me
        </div>


        <div class="gestures" (press)="onElePress()" (tap)="onEleTap()" (click)="onEleClick()">
            long Press me
        </div>
    `
})

export class TouchEventComponent {
    onEleClick() {
        console.log('I was Clicked!');
    }

    onEleTap() {
        console.log('I was Tapped!');
    }

    onElePress() {
        console.log('I was Pressed!');
    }
}