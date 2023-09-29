import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;
  constructor(private _uiservice: DesignUlilityService) {}

  ngOnInit(): void {
    this._uiservice.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video: any) {
    console.log(video.value);
    this._uiservice.asyncVideoEmit.next(video.value);
  }

  // On completed Method
  onComplete() {
    this._uiservice.asyncVideoEmit.complete();
  }
}
