import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private _du: DesignUlilityService) {}
  ngOnInit(): void {
    // Ex - 01
    const Arr = ['Anup', 'Dadabhau', 'Vedshree', 'Neha'];
    let obsSubscription: Subscription;
    const source = interval(2000);

    obsSubscription = source
      .pipe(
        tap((response) => {
          console.log('Tap' + response);
          if (response == 4) {
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer');
      });
  }
}
