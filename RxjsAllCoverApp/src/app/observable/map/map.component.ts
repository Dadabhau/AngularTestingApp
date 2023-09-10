import { Component, OnInit } from '@angular/core';
import { interval, Subscription, map, from } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  //Subscription
  sub1: Subscription;
  sub2: Subscription;
  // Message
  msg1 = '';
  msg2 = '';
  techStatus = '';
  constructor(private _designUlility: DesignUlilityService) {}
  ngOnInit(): void {
    // Ex. 01
    const boradcastVideos = interval(1000);
    this.sub1 = boradcastVideos
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res: any) => {
        this.msg1 = res;
        //console.log('Video ' + res);
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);
    //Ex. 02
    this.sub2 = boradcastVideos
      .pipe(map((data) => data * 2))
      .subscribe((res: any) => {
        this.msg2 = res;
        // console.log(res);
      });
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex. 03
    const members = from([
      { id: 1, name: 'Dadabhau' },
      { id: 2, name: 'Neha' },
      { id: 3, name: 'Vedshree' },
      { id: 4, name: 'Aaryan' },
      { id: 5, name: 'Abhishree' },
      { id: 6, name: 'Nilam' },
      { id: 7, name: 'Parth' },
      { id: 8, name: 'Atharv' },
    ]);

    members.pipe(map((data) => data.name)).subscribe((res) => {
      this._designUlility.print(res, 'elContainer');
      console.log(res);
    });
  }
}
