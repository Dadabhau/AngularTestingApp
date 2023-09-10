import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  constructor() { }
  promiseVal:any = '';
  DellAvailable() {
    return false;
  }
  HpAvilable() {
    return false;
  }
  ngOnInit(): void {
    // let buyLaptop = new Promise(function(resolve, reject){
    //   resolve('Promise is resolved!')
    // });
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is purchased');
        }, 3000)

      } else if (this.HpAvilable()) {
        return setTimeout(() => {
          resolve('HP is purchased');
        }, 3000)
      } else {
        return setTimeout(() => {
          reject('Laptop is not available in store');
        }, 3000)
      }
    });
    buyLaptop
      .then((res) => {
        console.log(res);
        this.promiseVal = res
      })
      .catch((res) => {
        console.log(res);
        this.promiseVal = res;
      });
  }
  myfuction() {
    console.log('My Function called');
  }
}
