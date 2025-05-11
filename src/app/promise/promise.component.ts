import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css',
})
export class PromiseComponent {
  constructor() {}

  dellAvailable() {
    return false;
  }
  hpAvailable() {
    return false;
  }
  promiseVal: any;

  

  ngOnInit(): void {
    let promiseVal;
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is purchased');
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve('HP is purchased');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('Nothing is available on store');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code => ', res);
        this.promiseVal = res;
      })
      .catch((res) => {
        console.log('catch code => ', res);
        this.promiseVal = res;
      });
  }
}
