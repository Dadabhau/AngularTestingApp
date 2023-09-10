import { Component, OnInit } from '@angular/core';
import { Subscription, interval, toArray, take, from, of } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss'],
})
export class ToarrayComponent implements OnInit {
  constructor() {}
  sourceSub: Subscription;
  user = [
    { name: 'Dadabhau', skill: 'Angular, Html, Css' },
    { name: 'Vedshree', skill: 'Drawing, Speaking, Dancing' },
    { name: 'Neha', skill: 'Cooking, Teaching' },
  ];

  ngOnInit(): void {
    // Ex - 01;
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res, typeof res);
    });

    // Ex - 02
    const source2 = from(this.user);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res, 'Soures 2');
    });

    // Ex - 03
    const source3 = of(this.user);
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res, 'Soures 3');
    });
  }
}
