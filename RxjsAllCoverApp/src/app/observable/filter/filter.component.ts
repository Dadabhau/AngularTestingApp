import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'Dadabhau', gender: 'Male' },
    { id: 2, name: 'Neha', gender: 'Female' },
    { id: 3, name: 'Vedshree', gender: 'Female' },
    { id: 4, name: 'Adwith', gender: 'Male' },
    { id: 5, name: 'Aaryan', gender: 'Male' },
    { id: 6, name: 'Abhishree', gender: 'Female' },
    { id: 7, name: 'Parth', gender: 'Male' },
    { id: 8, name: 'Atharv', gender: 'Male' },
  ];
  userData: any;
  userData2: any;
  userData3: any;
  constructor() {}
  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex - O1 Filter by Lenght
    source
      .pipe(
        filter((member) => member.name.length > 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.userData = res;
      });

    // Ex - O2 Filter by gender
    source
      .pipe(
        filter((member) => member.gender === 'Male'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.userData2 = res;
      });

    // Ex - O3 Filter by nth
    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.userData3 = res;
      });
  }
}
