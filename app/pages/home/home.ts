import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {TouchID} from 'ionic-native';
import {LoggedinPage} from '../loggedin/loggedin';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private touchIdAvailable: boolean;
  constructor(public _navCtrl: NavController, private _platform: Platform) {
    this._platform.ready().then(() => {
      TouchID.isAvailable().then(
        res => {
          console.log('Touch Id Present');
          this.touchIdAvailable = true
        },
        err => {
          console.log('Touch Id NOT Present : ' + err);
          this.touchIdAvailable = false
        }
      );
    })
  }

  public startTouchID() {
    TouchID.verifyFingerprint('Fingerprints are Awesome')
      .then(
      res => this._navCtrl.push(LoggedinPage),
      err => console.error('Error', err)
      );
  }

}
