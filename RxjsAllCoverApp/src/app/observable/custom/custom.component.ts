import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit, OnDestroy {
  techStatus = '';
  techStatus2 = '';
  name = '';
  namesStatus: any;
  sub2: Subscription;
  sub3: Subscription;
  constructor(private _designUtility: DesignUlilityService) {}
  ngOnInit(): void {
    // Ex. 01 (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Html and Css');
      }, 3000);
      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);
      setTimeout(() => {
        observer.next('Jquery');
        observer.complete();
      }, 5000);
    });
    cusObs1.subscribe(
      (res: any) => {
        // console.log(res);
        this._designUtility.print(res, 'elContainer');
      },
      (error: any) => {
        // console.log(error);
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    // Ex. 02 (Custom Interval)
    const arr = ['Angular', 'Typescript', 'Javasript', 'Html', 'Css', 'Jquery'];
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);

        if (count >= 3) {
          observer.error();
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.sub2 = cusObs2.subscribe(
      (res: any) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer2');
      },
      (error: any) => {
        // console.log(error);
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );
    // Ex. 02 (Custom Interval)
    const arr2 = ['Dadabhau', 'Vedshree', 'Neha', 'Aryan', 'Abhishree'];
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);

        if (count >= 3) {
          observer.error();
        }
        if (count >= 4) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.sub3 = cusObs3.subscribe(
      (res: any) => {
        console.log(res);
        this.name = res;
      },
      (error: any) => {
        // console.log(error);
        this.namesStatus = 'error';
      },
      () => {
        this.namesStatus = 'completed';
      }
    );
  }

  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }
}
