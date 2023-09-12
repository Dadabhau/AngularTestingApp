import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { DesignUlilityService } from './../../appservices/design-ulility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  constructor(private _du: DesignUlilityService) {}
  randomName = [
    'Anup',
    'Dadabhau',
    'Vedshree',
    'Neha',
    'Aaryan',
    'Abhishree',
    'Parth',
    'Aatharv',
  ];
  ngOnInit(): void {
    const nameSource = from(this.randomName);

    // Ex - 01 | Take
    nameSource.pipe(take(5)).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer');
    });

    // Ex - 02 | TakeLast
    nameSource.pipe(takeLast(5)).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer2');
    });

    // Ex - 03 | TakeUntil
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');
    source.pipe(takeUntil(condition2)).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer3');
    });
  }
}
