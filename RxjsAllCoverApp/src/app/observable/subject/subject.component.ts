import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  // for Subject
  //username: string = 'Dadabhau';

  // For BehaviorSubject
  username: string;
  constructor(private uiservices: DesignUlilityService) {}
  ngOnInit(): void {
    this.uiservices.exclusive.next(true);
    this.uiservices.username.subscribe((res) => {
      this.username = res;
    });
  }
  ngOnDestroy(): void {
    this.uiservices.exclusive.next(false);
  }
}
