import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private _designUtility: DesignUlilityService) {}

  ngOnInit(): void {
    // OF
    const Obs1 = of('Dadabhau', 'Vedshree', 'Neha');
    Obs1.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    });
    const Obs2 = of({ a: 'Dadabhau', b: 'Vedshree', c: 'Neha' });
    Obs2.subscribe((res) => {
      console.log(res);
      //this._designUtility.print(res, 'elContainer2');
      this.obsMsg = res;
    });

    // FROM - Array
    const Obs3 = from(['Dadabhau', 'Vedshree', 'Neha']);
    Obs3.subscribe((res) => {
      console.log(res, 'From (Array)');
      this._designUtility.print(res, 'elContainer3');
    });

    // FROM - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });
    // promise.then((res) => {
    //   console.log(res);
    // });
    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      console.log(res, 'From (Promise)');
      this._designUtility.print(res, 'elContainer4');
    });

    // FROM - String
    const Obs5 = from('Welcome to String to Observable');
    Obs5.subscribe((res) => {
      console.log(res, 'From (String)');
      this._designUtility.print(res, 'elContainer5');
    });
  }
}
