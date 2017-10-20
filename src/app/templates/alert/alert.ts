import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';

/*
 Generated class for the Alert page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  sheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive')
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
            let navTransition = actionSheet.dismiss();

            navTransition.then(() => {
              this.navCtrl.pop();
            });
            return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancle clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  alert() {
    let alertItem = this.alertCtrl.create({
      title: 'Low',
      subTitle: 'remaining',
      buttons: ['Dismiss']
    });
    alertItem.present();
  }

  alertConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Is delete it ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
            let navTransition = confirm.dismiss();

            navTransition.then(() => {
              this.navCtrl.pop();
            });
            return false;
          }
        }
      ]
    });
    confirm.present();
  }

  alertPrompt() {
    let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  alertRadio() {
    let radio = this.alertCtrl.create();
    let color = 'yellow';
    radio.setTitle("Lightsaber color");
    radio.addInput(
      {
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: color == 'blue' ? true : false
      }
    );
    radio.addInput(
      {
        type: 'radio',
        label: 'Yellow',
        value: 'yellow',
        checked: color == 'yellow' ? true : false
      }
    );
    radio.addInput(
      {
        type: 'radio',
        label: 'Red',
        value: 'red',
        checked: color == 'red' ? true : false
      }
    );
    radio.addInput(
      {
        type: 'radio',
        label: 'Black',
        value: 'black',
        checked: color == 'black' ? true : false
      }
    );
    radio.addButton('Cancel');
    radio.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
      }
    });
    radio.present();
  }

  alertCheckbox() {
    let checkbox = this.alertCtrl.create();
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
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    checkbox.present();
  }
}
