import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  user1list = ['Angular 1', 'Angular 2', 'Angular 3'];
  user2list: string[] = [];
  user3list: string[] = [];

  //SubcribeModes
  subcribeMode2: boolean = false;
  subcribeMode3: boolean = false;

  //Subcriptions
  subcription2: Subscription;
  subcription3: Subscription;

  // Toggle Properties
  methodInterval: boolean = false;
  intSub: Subscription;

  constructor(private _uiservice: DesignUlilityService) {}

  ngOnInit(): void {
    this._uiservice.videoemit.subscribe((res) => {
      console.log(res);
      this.user1list.push(res);
    });
  }

  onVideoAdd(video: any) {
    // console.log(video.value);
    this._uiservice.videoemit.next(video.value);
  }

  //user 2 Subcribe Button
  user2Subcribe() {
    if (this.subcribeMode2) {
      this.subcription2.unsubscribe();
    } else {
      this.subcription2 = this._uiservice.videoemit.subscribe((res) => {
        this.user2list.push(res);
      });
    }
    this.subcribeMode2 = !this.subcribeMode2;
  }
  //user 3 Subcribe Button
  user3Subcribe() {
    if (this.subcribeMode3) {
      this.subcription3.unsubscribe();
    } else {
      this.subcription3 = this._uiservice.videoemit.subscribe((res) => {
        this.user3list.push(res);
      });
    }
    this.subcribeMode3 = !this.subcribeMode3;
  }

  // Toggle Method
  toggleMethod() {
    const boredCastVideo = interval(1000);
    if (!this.methodInterval) {
      this.intSub = boredCastVideo.subscribe((res) => {
        this._uiservice.videoemit.next('Video ' + res);
      });
    } else {
      this.intSub.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }
}
