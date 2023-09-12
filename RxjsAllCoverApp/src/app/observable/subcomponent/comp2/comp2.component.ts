import { Component, OnInit } from '@angular/core';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  // for Subject
  //username: string = 'Dadabhau';

  // For BehaviorSubject
  username: string;

  constructor(private _designUtility: DesignUlilityService) {}

  ngOnInit(): void {
    this._designUtility.username.subscribe((res) => {
      this.username = res;
    });
  }
  onChange(uname: any) {
    console.log(uname.value);
    this._designUtility.username.next(uname.value);
  }
}
