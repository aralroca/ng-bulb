/// <reference types="web-bluetooth-typings" />

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SERVICE_ID} from '../../common/consts';
import {DevicePage} from '../device/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startScanning(){
    navigator.bluetooth.requestDevice({
      filters: [{services: [SERVICE_ID]}]
    }).then(device => this.redirectToDevicePage(device));
  }

  redirectToDevicePage(device){
    this.navCtrl.push(DevicePage, {
      device: device
    });
  }

}
