import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  myColor: string = '';
  constructor(private _du: DesignUlilityService) {}
  ngOnInit(): void {
    const source = interval(2000);
    // Ex - 01
    const Arr = ['Anup', 'Dadabhau', 'Vedshree', 'Neha'];
    let obsSubscription: Subscription;

    obsSubscription = source
      .pipe(
        tap((response) => {
          // console.log('Tap = > ' + response);
          if (response == 4) {
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        // console.log(res);
        this._du.print(res, 'elContainer');
      });

    // EX - 02
    const color = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple'];
    let obsSubscription2: Subscription;
    obsSubscription2 = source
      .pipe(
        tap((response) => {
          this.myColor = color[response];
          console.log('Tap = > ' + response);
          if (response == 6) {
            obsSubscription2.unsubscribe();
          }
        }),
        map((res) => color[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer2');
      });
  }
}
