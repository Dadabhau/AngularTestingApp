import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUlilityService) {}
  ngOnInit(): void {
    // Interval
    // const broadCastVideos = interval(2000);

    // Timer
    // timer(delay,interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = `Video ${res}`;
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer1');
      this._designUtility.print(this.obsMsg, 'elContainer2');
    });
  }
}
