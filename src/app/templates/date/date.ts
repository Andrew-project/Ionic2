import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-date',
  templateUrl: 'date.html'
})
export class DatePage {
  timeStarts1: string;
  timeStarts2: string;
  timeDate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.timeStarts1 = this.stampToDate(1512760020000);
    console.log('ionViewDidLoad DatePage');
  }

  log(date: any) {
    this.timeDate = this.dateToStamp(date);
    console.log(this.timeDate);
    console.log(this.stampToDate(this.timeDate));
  }

  dateToStamp(date: any) {
    let time = Date.parse(date);
    return time - 8*60*60*1000;
  }

  stampToDate(time: number) {
    let t = time + 8*60*60*1000;
    return new Date(t).toISOString();
  }
}
