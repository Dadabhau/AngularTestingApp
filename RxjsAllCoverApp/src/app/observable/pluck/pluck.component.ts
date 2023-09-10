import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  userData: any;
  user = [
    { name: 'Dadabhau', skills: 'Angular, HTML,css' },
    { name: 'Vedshree', skills: 'Drawing, Dancing, Marshal Art' },
    { name: 'Neha', skills: 'Cooking, Creative' },
    { name: 'Adwith', skills: 'Drawing, Dancing, Marshal Art, Acting' },
  ];
  constructor() {}
  ngOnInit(): void {
    from(this.user)
      .pipe(
        // map((data) => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.userData = res;
      });
  }
}
