import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUlilityService } from 'src/app/appservices/design-ulility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  constructor(private _ui: DesignUlilityService) {}

  // Get Observable
  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer');
    });

    // Ex - 02 | Map + ConcatAll
    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe((res) => {
        console.log(res);
        this._ui.print(res, 'elContainer1');
      });

    // Ex - 03 | ConcatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._ui.print(res, 'elContainer2');
    });
  }
}
